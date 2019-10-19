import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interfaces/good.interface';
import { GoodsService } from 'src/app/services/goods.service';

/**
 * Extra option for the administrator and is to add a new product
 */
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  /**
   * Refers to an element in the HTML
   * @returns ElementRef
   */
  @ViewChild('image', {static: true}) image:ElementRef
 
  /**
   * @param  goodservice To add a new product in Firebase storage
   */
  constructor(private goodservice: GoodsService) { }

  /**
  * @ignore
  */
  ngOnInit() {
  }
  /**
   * @param  {NgForm} form - Get the parameters entered, name, price and product image
   * @returns A new product in Firebase and any user can see it
   */
  addNewGood(form: NgForm){
    let name=(<Good>form.value).name,
      price=(<Good>form.value).price,
      image=(<HTMLInputElement>this.image.nativeElement).files[0];
    this.goodservice.addNewGood(name,price,image).then(msg => console.log(msg));
  }

}
