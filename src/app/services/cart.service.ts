import { Injectable } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private angularfirestore:AngularFirestore, private authservice:AuthService) { }

addToCart(data: Good){
  return this.angularfirestore.collection(`users/${this.authservice.userId}/cart`).add(data);
}

getCart(){
  return this.angularfirestore.collection(`users/${this.authservice.userId}/cart`).snapshotChanges();
}

delete(id){
  return this.angularfirestore.doc(`users/${this.authservice.userId}/cart/${id}`).delete();
}

save(id, amount){
  return this.angularfirestore.doc(`users/${this.authservice.userId}/cart/${id}`).update({
    amount
  });
}

}
