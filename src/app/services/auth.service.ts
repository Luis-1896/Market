import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/** 
 * The methods to log in, register, log out
 */
export class AuthService {

  /**
   * Store the active user in the session
   */
  user:Observable<firebase.User>;
  /**
   * Store the id user
   */
  userId:string='';
  /**
   * @param anguFireAuth - To authenticate the user
   */
  constructor(private anguFireAuth: AngularFireAuth) { 
    this.user=anguFireAuth.user;
  }

  /**
   * @param  {} email Email received to enter new user
   * @param  {} password Password received to enter new user
   * @returns A new user 
   */
  signup(email, password){
    return this.anguFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  /**
   * @param  {} email Email received to access your user account
   * @param  {} password Password received to access your user account
   * @return Access your user account
  */
  login(email, password){
    return this.anguFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  /**
   * Logout user account
   */
  logout(){
    return this.anguFireAuth.auth.signOut();
  }
}
