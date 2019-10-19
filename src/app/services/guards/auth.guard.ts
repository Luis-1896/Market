import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { resolve } from 'dns';

/**
 * To know if there is already a user in the system or to deny the purchase before logging 
 */

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  /**
   * @param  authservice  - Obtain the observable user to know if there is an active user in the system.
   * @param  router - Send the Login page
   */
  constructor(private authservice: AuthService, private router: Router) { }
  /**
   * @param  {ActivatedRouteSnapshot} route Contains the information about a route associated
   * @param  {RouterStateSnapshot} state Represents the state of the router at a moment in time
   * @returns If a user is active or sends it to the login
   */
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    return new Promise(resolve => {
      this.authservice.user.subscribe(user =>{
        if (user){
          resolve(true);
        }         
        else{
          this.router.navigate(['/login']);
          resolve(false);
        }
      })
    })
  }
}
