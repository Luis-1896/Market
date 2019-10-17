import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen:boolean=false; 
  isUser: boolean=false;
  isAdmin: boolean=false;
  constructor(private authservice:AuthService, private userservice: UserService) { }

  ngOnInit() {

    this.authservice.user.subscribe(user =>{
      if(user){
        this.isUser=true;
        this.authservice.userId=user.uid;
        this.userservice.getUserData().subscribe(data=>{
          if(data['admin'])this.isAdmin=true;
        })
      }
      else {
        this.isUser=false;
        this.authservice.userId='';
      }
    });
  }

  toggleNavbar(){
    this.isOpen=!this.isOpen;
  }

  logout(){
    this.authservice.logout();
  }
}
