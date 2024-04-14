import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { HttpClientModule } from '@angular/common/http';
import { InsuranceCompanyQuestionComponent } from './insurance-company-question/insurance-company-question.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    VerifyEmailComponent,
    ContactUsComponent,
    AboutUsComponent,
    QuestionFormComponent,
    InsuranceCompanyQuestionComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    HttpClientModule ,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDWx5HQ7LBCSYawOWukYkILw5fL2a0pbgg",
      authDomain: "insuramatch-187d4.firebaseapp.com",
      projectId: "insuramatch-187d4",
      storageBucket: "insuramatch-187d4.appspot.com",
      messagingSenderId: "55792687225",
      appId: "1:55792687225:web:586e8847c64e84596d1ca8",
      measurementId: "G-D2LFEBY622"
    }),AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
