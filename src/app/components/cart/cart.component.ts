import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from 'src/app/interfaces/shopping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cart: Shopping[]=[];
total:number;

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.cs.getCart().subscribe(cart =>{
      this.cart=cart.map(shopping =>{
        return{
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
    });

    this.cs.getCart().subscribe(cart =>{
       return this.total = this.cart.reduce((
        acc,
        obj,
      ) => acc + (obj.amount* obj.price),
      0);
    });
  }

  delete(index){
    this.cs.delete(this.cart[index].id);
  }

  save(index){
    this.cs.save(this.cart[index].id,this.cart[index].amount);
  }

}
