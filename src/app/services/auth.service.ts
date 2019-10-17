import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>;
  userId:string='';

  constructor(private anguFireAuth: AngularFireAuth) { 
    this.user=anguFireAuth.user;
  }

  signup(email, password){
    return this.anguFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  login(email, password){
    return this.anguFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.anguFireAuth.auth.signOut();
  }
}
