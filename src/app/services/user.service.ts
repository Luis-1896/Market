import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularfirestore:AngularFirestore, private authservice:AuthService) { }

addNewUser(id, name, address, admin){
  return this.angularfirestore.doc('users/'+id).set({
    name,
    address,
    admin:false
  });
}

getUserData(){
  return this.angularfirestore.doc('users/'+this.authservice.userId).valueChanges();
}

}