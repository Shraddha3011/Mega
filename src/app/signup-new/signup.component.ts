import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../../cognito.service';
import { IUser } from '../../cognito.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {

  loading : boolean ;
  isConfirm: boolean ;
  user: IUser;

  constructor(private router: Router, private cognitoSoervice : CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;


}

public signUp(): void {
  this.loading = true;
  this.cognitoSoervice.signUp(this.user)
  .then(() => {
    this.loading = false;
    this.isConfirm = true;
  }).catch(() => {
    this.loading = false;
  });
}

public confirmSignUp(): void {
  this.loading = true;
  this.cognitoSoervice.confirmSignUp(this.user)
  .then(() => {
    this.router.navigate(['/login']);
  }).catch(() => {
    this.loading = false;
  });
}

}