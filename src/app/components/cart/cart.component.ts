import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from 'src/app/interfaces/shopping.interface';

/**
 * Shopping cart that the user acquired
 */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /**
   * Get the Shoopping variables
   */
cart: Shopping[]=[];
/**
 * Sum total from product x amount
 */
total:number;

  /**
   * @param cartservice - Gets the methods of CartService. Exactly from the getCart() method to get the product purchase and amount
   */
  constructor(private cartservice: CartService) { }
  /**
   * Update the products purchase and amount and the sum total from product x amount
   */
  ngOnInit() {
    
    this.cartservice.getCart().subscribe(cart =>{
      this.cart=cart.map(shopping =>{
        return{
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
    });

    this.cartservice.getCart().subscribe(cart =>{
       return this.total = this.cart.reduce((
        acc,
        ob,
      ) => acc + (ob.amount* ob.price),
      0);
    });
  }
  /**
   * @param  {} index - Get the purchase to delete
   * @returns Remove the purchase if the user no longer wants it.
   */
  delete(index){
    this.cartservice.delete(this.cart[index].id);
  }

  
  /**
   * @param  {} index - Get the purchase to save  in the Firebase
   * @returns The update of purchased products
   */
  save(index){
    this.cartservice.save(this.cart[index].id,this.cart[index].amount);
  }

}
