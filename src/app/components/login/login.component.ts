import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

/**
 * User Login
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * @param  authservice - Send attributes to the AuthService file login method.
   * @param  router - Send the Home page
   */
  constructor(private authservice:AuthService, private router:Router) { }

  /**
  * @ignore
  */
  ngOnInit() {
  }
  /**
   * @param  {} form - Get the email and password values entered
   * @returns Send the Home page if the email and password are correct
   */
  login(form){
    let data=form.value;
    this.authservice.login(data.email, data.password)
    .then(()=>{
        this.router.navigate(['/']); 
      }
    ).catch(err => console.log(err));
  }

}
