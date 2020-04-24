import { Injectable } from '@angular/core';
import { AuthModel} from '../auth/auth-model'
import {  Observable } from 'rxjs';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  
  userArray = []
  public enquiry = 1;
  isLoggedIn=false;
  
  
  
  constructor(public httpclient:HttpClient,public router:Router){}
  


setsignupdata(value:AuthModel):Observable<HttpResponse<Config>>{
   
 const signupurl="http://54.198.226.103:4500/api/user/signup"
 
  return this.httpclient.post<Config>(signupurl,value,{observe:'response'})
  
  
}

  getsignupdata(value){
 
    const loginurl="http://54.198.226.103:4500/api/user/login"
    return this.httpclient.post<Config>(loginurl,value,{observe:'response'})   
  }

logoutuser(){

  localStorage.removeItem('token');
  this.router.navigate(['/login'])
}
getToken(){
  return localStorage.getItem('token')
}

}