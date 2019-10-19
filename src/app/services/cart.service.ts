import { Injectable } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Shopping cart methods
 */
export class CartService {
  /**
   * @param  angularfirestore - To add, update or delete the user's collection of the purchased
   * @param  authservice - Get the user id
   */
  constructor(private angularfirestore:AngularFirestore, private authservice:AuthService) { }
/**
 * @param  {Good} data  To add a product
 * @returns A new product purchased
 */
addToCart(data: Good){
  return this.angularfirestore.collection(`users/${this.authservice.userId}/cart`).add(data);
}
/**
 * Get the purchase values
 */
getCart(){
  return this.angularfirestore.collection(`users/${this.authservice.userId}/cart`).snapshotChanges();
}
/**
 * @param  {} id Id purchase
 * @returns Delete product purchase
 */
delete(id){
  return this.angularfirestore.doc(`users/${this.authservice.userId}/cart/${id}`).delete();
}
/**
 * @param  {} id Id purchase
 * @param  {} amount modified amount of purchase
 * @returns Update the purchase total
 */
save(id, amount){
  return this.angularfirestore.doc(`users/${this.authservice.userId}/cart/${id}`).update({
    amount
  });
}

}
