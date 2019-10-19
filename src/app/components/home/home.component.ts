import { element } from 'protractor';
import { Good } from './../../interfaces/good.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
/**
 * Main page where existing products are displayed.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
/**
 * Get the Good variables
 */
  goods:Good[]=[];
  /**
  * Get the goods observable
  */
 goodsObservable:Subscription;
 /**
  * Add the product number
  */
 add:number=-1;
  /**
   * @param  goodservice - Gets the methods of GoodsService. Exactly from the getAllGoods() method to get all existing products
   * @param  cartservice - Gets the methods of CartService. Exactly from the addToCart() method to send the data of the purchased product
   * @param  authservice - Gets the methos and variables of AuthService. Exactly the userId variable to add the purchase to your account or send the login form
   * @param  router - Send the login form
   */
  constructor(private goodservice:GoodsService, private cartservice: CartService, private authservice:AuthService, private router:Router) { }
  /**
   * Update the products if the administrator delete or add a new one
   */
  ngOnInit() {
    this.goodsObservable=this.goodservice.getAllGoods().subscribe(data => {
    this.goods=data.map(element=>{
        return {
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
      });
    });
  }
  /**
  * @ignore
  */
  ngOnDestroy(){
    this.goodsObservable.unsubscribe();
  }
  /**
   * @param  {number} index  Add the product id
   * @returns The product "id" is substituted in the value of "add" or sending to the form enter to buy the product
   */
  addToCart(index:number){
    if(this.authservice.userId){
      this.add=+index;
    }else this.router.navigate(['/login']);
  }
/**
 * @param  {number} amount Add the amount purchased
 * @returns The product purchased
 */

  buy(amount: number){
    let selectedGood =this.goods[this.add];
    let data={
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    };
    this.cartservice.addToCart(data).then(()=>this.add =-1)
  }

}
