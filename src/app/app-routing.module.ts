import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { QuestionComponent } from './components/question/question.component';
import { Q2Component } from './components/q2/q2.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin',component:SignInComponent},
  {path:'question',component:QuestionComponent},
  {path:'q2',component:Q2Component},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
