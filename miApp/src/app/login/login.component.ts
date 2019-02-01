
//import { Component, OnInit } from '@angular/core';
//import { LoginService } from './login.service';
//import { Router } from '@angular/router';
//import { UserService } from '../user/user.service';
//import { User } from '../user/user.model';
import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res:any;
  constructor(private loginService: LoginService, 
              private router: Router, 
              private userService: UserService) { 

  //constructor(private loginService: LoginService, private router: Router){//, private userService: UserService) { 

  }

  ngOnInit() {
    
  }

  logIn(rut: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(rut, password).subscribe(
      res => {
        //let u: User = {rut: rut};        
        this.userService.setUserLoggedIn(res);
      /*
      res => {
        //let u: User = {rut: rut};        
        this.userService.setUserLoggedIn(res);
          */

      },    
      error => {
        console.error(error);

      },
      () => this.navigate()
    );
    

  }

  navigate() {    
    this.router.navigateByUrl('/home');
  }
}

