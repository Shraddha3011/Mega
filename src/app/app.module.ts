import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { QuestionComponent } from './components/question/question.component';
import { Q2Component } from './components/q2/q2.component';
import { LoginComponent } from './components/login/login.component';
import { MascotComponent } from './mascot/mascot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignInComponent,
    QuestionComponent,
    Q2Component,
    LoginComponent,
    MascotComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
