import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

/**
 * Navigation bar to select a category from the website
 * @export
 * @class NavbarComponent
 * @implements OnInit
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
/** 
 * Is the page becomes Smaller, the options are grouped in a button and to see the options you only have to select that button.
 * 
 * Return True if you select the button.
*/
  isOpen:boolean=false; 
/** 
 * Returns True when a user login.
*/
  isUser: boolean=false;
/**
 * Return True if a user login and is administrator.
 */
  isAdmin: boolean=false;

  /**
   * 
   * @param authservice - Gets the variables and methods of AuthService.
   * @param userservice - Gets the methods of UserService. Exactly from the getUserData () method to know the type of user. 
   */
   constructor(private authservice:AuthService, private userservice: UserService) { }
 
  /**
   * Method to obtain the status of a user who is logged in and display the corresponding menu options.
   */
  ngOnInit() {
    this.authservice.user.subscribe(user =>{
      if(user){
        this.isUser=true;
        this.authservice.userId=user.uid;
        this.userservice.getUserData().subscribe(data=>{
          if(data['admin'])
          {
            this.isAdmin=true;
          }
        })
      }
      else {
        this.isUser=false;
        this.authservice.userId='';
      }
    });
  }
  /**
   * Method to open or close the menu when the page display screen is small
   */
  toggleNavbar(){
    this.isOpen=!this.isOpen;
  }
  /**
   * Logout Method
   */
  logout(){
    this.authservice.logout();
  }
}
