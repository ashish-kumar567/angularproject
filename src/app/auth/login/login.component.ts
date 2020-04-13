import { Component, OnInit } from '@angular/core';
import { Users} from '../users';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  users : Users[] = [];
  model : any = {};
  public logindata: any;
  
  constructor(private authservice:AuthService ) { }

  ngOnInit(): void {
    //this.users=this.authservice.getsignupdata();
    
  }

   
  loginformdata(loginForm){
    debugger;
  

    this.logindata = this.authservice.getsignupdata()
    if(this.logindata.email === loginForm.email && this.logindata.password === loginForm.password){
      alert("Login succes! ")
    }
    else{
      alert("login Failed");
    }
   


  //   if(JSON.stringify(this.loginformdata)==JSON.stringify(this.users)) 
  //   alert("login successfull"); 
  //  else
  //   alert("login failed!!!"); 
    // 

    
    /*if(this.users.email==this.users.email && this.users.password==this.users.password){
     alert("login successfully");
    }
      else{
        alert("login not valid");
      }*/
    }

    
  }

