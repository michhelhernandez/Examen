//import { Injectable } from '@angular/core';

/*
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
*/
//////////
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public usserLogged:User;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:Object) {
    this.isUserLoggedIn = true;
    //this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }

}