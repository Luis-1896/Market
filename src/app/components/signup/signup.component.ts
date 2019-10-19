import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
/**
 * Page to register new users
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
/**
 * Returns an error if the same email exists in the database
 */
errorMessage:string='';
/**
 * Hides the password or is visible if you select the icon
 */
hide = true;
  /**
   * @param  authservice -Send attributes to the AuthService file signup method.
   * @param  userservice -Send attributes to the addNewUser method of the UserService file to add it in Firebase.
   * @param  router -send the Home page
   */
  constructor(private authservice:AuthService, private userservice:UserService, private router:Router) { }

  /**
  * @ignore
  */
  ngOnInit() {
  }
  /**
   * @param  {} form - Get the name, email, password and address values entered
   * @returns Send the Home page if the email does not exist
   */
  signup(form){
    let data:User =form.value;
    this.authservice.signup(data.email,data.password)
    .then(reault => {
      this.errorMessage='';
      this.userservice.addNewUser(reault.user.uid, data.name,data.address,data.admin).then(()=>{
        this.router.navigate(['/']); 
      }).catch(err => console.log('error',err));
    })
    .catch(err => {
      this.errorMessage=err.message;
    });

  }
}
