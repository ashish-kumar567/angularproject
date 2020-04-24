
import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../auth-model'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  model = new AuthModel('','')
  
//API CALL LOGIC
loginformdata(formdata){
  debugger
// if(this.authService.getsignupdata(formdata.value).subscribe(
//     (res:any)=>{
//       debugger;
//       localStorage.setItem('token',res.token) }))
// alert("login successful");
// else{ alert("login failed");}
// formdata.reset();
// this.authService.enquiry=2; }
this.authService.getsignupdata(formdata.value).subscribe(
   res=>{
    debugger

    localStorage.setItem('token',res.body.token),
    alert('login successful')
    this.authService.loggedIn(true);
    this.authService.userId(res.body.userId)

    error=>
    alert("login Failed")
  }
  );
  formdata.reset();
  this.authService.enquiry=2
}
}

