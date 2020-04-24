import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { from } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
  }

}
