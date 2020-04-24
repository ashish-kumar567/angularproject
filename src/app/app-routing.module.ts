import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewpostComponent } from './auth/newpost/newpost.component';



const routes: Routes = [
{path:'post-list',component:PostListComponent},
{path:'post-create',component:PostCreateComponent},
// {path:'sign-up',  component:SignUpComponent},
// //{path:'sign-up',  loadChildren:'./sign-up/sign-up.module#SignUpModule'},
{path:'login',component:LoginComponent},
{path:'sign-up',  component:SignUpComponent},

{path:'logout',component:LogoutComponent},
{path:'newpost',component:NewpostComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}