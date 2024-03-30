import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { QuestionComponent } from './components/question/question.component';
import { LoginComponent } from './components/login/login.component';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignUpComponent,
    QuestionComponent,
    LoginComponent,
    VerifyEmailComponent,
    ContactUsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyCw-gVP5oVBECwI6q-MQSvWMR6cnO2H78w",
    authDomain: "insuramatch-cec0b.firebaseapp.com",
    projectId: "insuramatch-cec0b",
    storageBucket: "insuramatch-cec0b.appspot.com",
    messagingSenderId: "432345424397",
    appId: "1:432345424397:web:8bde09a27d4edc94ffeb44",
    measurementId: "G-QDGG37PYET"
    }),AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
