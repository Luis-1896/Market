import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Methods for adding and get data from a user
 */
export class UserService {
  /**
   * @param  angularfirestore - To add some values to the Firebase database
   * @param  authservice - Get the user id
   */
  constructor(private angularfirestore:AngularFirestore, private authservice:AuthService) { }
/**
 * @param  {} id To add id
 * @param  {} name To add name
 * @param  {} address To add address
 * @param  {} admin To add value false in admin
 * @returns A new user
 */
addNewUser(id, name, address, admin){
  return this.angularfirestore.doc('users/'+id).set({
    name,
    address,
    admin:false
  });
}
/**
 * Get all user id values
 */
getUserData(){
  return this.angularfirestore.doc('users/'+this.authservice.userId).valueChanges();
}

}