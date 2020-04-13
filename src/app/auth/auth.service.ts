import { Injectable } from '@angular/core';
import {  Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticate(value: any) {
    throw new Error("Method not implemented.");
  }
  users : any=[];
  

  constructor() { }


  setsignupdata(user) { //: Users
    //alert(JSON.stringify(user));
    debugger
    this.users =this.users.concat(user);
    this.users = user;
    //alert(this.users.length)
}

   getsignupdata(){
     //alert("i am in getsignupdata")
     debugger
     alert(JSON.stringify(this.users))
     return this.users;
     //let authArray = this.users.filter(allCredentials => allCredentials.email == loginForm.email)
     //alert(authArray[0])
    
   }
 


}
