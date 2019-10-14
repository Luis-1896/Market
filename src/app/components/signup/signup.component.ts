import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

errorMessage:string='';

  constructor(private as:AuthService, private us:UserService, private router:Router) { }

  ngOnInit() {
  }

  signup(form){
    let data:User =form.value;
    this.as.signup(data.email,data.password)
    .then(reault => {
      this.errorMessage='';
      this.us.addNewUser(reault.user.uid, data.name,data.address,data.admin).then(()=>{
        this.router.navigate(['/']); 
      }).catch(err => console.log('fs',err));
    })
    .catch(err => {
      this.errorMessage=err.message;
    });

  }
}
