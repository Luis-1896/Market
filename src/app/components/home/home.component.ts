import { element } from 'protractor';
import { Good } from './../../interfaces/good.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 goods:Good[]=[];
 goodsObservable:Subscription;
 add:number=-1;

  constructor(private gs:GoodsService, private cs: CartService) { }

  ngOnInit() {
    //this.gs.getAllGoods().subscribe(data => this.goods = data);
    this.goodsObservable=this.gs.getAllGoods().subscribe(data => {
    this.goods=data.map(element=>{
        return {
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
      });
    });

  }

  ngOnDestroy(){
    this.goodsObservable.unsubscribe();

  }

  addToCart(index:number){
    this.add=+index;
   
  }

  buy(amount: number){
    let selectedGood =this.goods[this.add];
    let data={
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    };
    this.cs.addToCart(data).then(()=>this.add =-1)


  }

}
