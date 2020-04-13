import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { AuthService} from '../auth.service'
import { LoginComponent} from '../login/login.component'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[LoginComponent]
})
export class SignUpComponent implements OnInit {
  //users=new Users();
  model: any = {};
  signupform: any;
 
 
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  
  //this.users=this.authservice.getsignupdata();
  }
  
  
  
 onSubmit(signupform) {

    //this.users=this.model;
    console.log(JSON.stringify(signupform.value));
    this.authservice.setsignupdata(signupform.value);
    signupform.reset();
     //this.resetForm();
     alert('sign-up success!..');
    
  }
  

  /*resetForm() {
    //this.users=new Users();
    this.users.email="";
    this.users.password="";
   //this.users.setValue(this.users);
  }*/ 
}
