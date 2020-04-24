import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  userdetails: Object;

  constructor(public router:Router,private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.getsignupdata('').subscribe(

    res=>{
     this.userdetails=res;
     },
     err=>{
       console.log(err);
     }
     )
  }

logout(){

  
  this.authService.logoutuser()
  localStorage.getoken().removeItm('token')

  this.router.navigate(['/login'])
}
}
