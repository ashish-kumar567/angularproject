 import { Component, OnInit } from '@angular/core';
 import { AuthModel } from '../auth-model'
import { AuthService} from '../auth.service'
import {Router} from '@angular/router'
import { Observable,Subject, from } from 'rxjs';
import {  LogoutComponent} from '../logout/logout.component'
import { HttpClient } from '@angular/common/http';

 @Component({
  selector: 'app-sign-up',
 templateUrl: './sign-up.component.html',
 styleUrls: ['./sign-up.component.css'],
 })
export class SignUpComponent implements OnInit {
  public status ;

  constructor(private authService:AuthService,public router:Router,private httpclient:HttpClient) { }
//public status ;
  ngOnInit(): void {
  }
   
 model = new AuthModel('','')
  onSubmit(form){
    debugger

  //   if(this.authService.setsignupdata(form.value)){
  //     alert("Sign Up success!")
  //   }else{
  //     alert("sign up error!")
  //   }

  //   form.reset()
  //   this.router.navigate(['/login']);
  // }

this.authService.setsignupdata(form.value)
.subscribe( 
  response=>
   alert("signup  success!"),
   error =>
    alert("signup success!")

    
  );
  form.reset();
  this.router.navigate(['/login']);

  }
}





  



// onSubmit(form){
//   this.response=this.authService.setsignupdata('email.value','password.value');
//   this.response.subscribe((data)=>{
//   this.status=data["message"];
//   })
//   alert(this.status)
//   alert("sign-up success")
//   form.reset();
//   this.router.navigate(['/login']);

// }



