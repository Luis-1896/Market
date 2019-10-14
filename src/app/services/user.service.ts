import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore,private as:AuthService) { }


addNewUser(id, name, address,admin){
  return this.fs.doc('users/'+id).set({
    name,
    address,
    admin:false

  })

}

getUserData(){
  return this.fs.doc('users/'+this.as.userId).valueChanges();
}

}