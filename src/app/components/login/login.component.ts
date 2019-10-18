import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(form){
    let data=form.value;
    this.authservice.login(data.email, data.password)
    .then(()=>{
        this.router.navigate(['/']); 
      }
    ).catch(err => console.log(err));
  }

}
