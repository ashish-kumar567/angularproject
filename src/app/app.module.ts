import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './posts/post.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { NewpostComponent } from './auth/newpost/newpost.component';
// import { SignUpModule} from './auth/sign-up/sign-up.module';
// import { LoginModule} from './auth/login/login.module';







@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    NewpostComponent,
    //AlertComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule      
  ],
  providers: [PostService,CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App module loaded')
  }
}
