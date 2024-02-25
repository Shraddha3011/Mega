import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpMessageComponent } from '../pop-up-message/pop-up-message.component';
import { IUser, CognitoService } from '../../cognito.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean;
  user: IUser;
  resettingPassword: boolean;
  resetCode: string;
  newPassword: string;
  rememberMe: boolean;

  

  ngOnInit(): void {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      this.user = JSON.parse(rememberedUser);
      this.rememberMe = true;
    } else {
      this.user = {} as IUser;
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commonservice: CommonService,
    private dialog: MatDialog,
    private cognitoService: CognitoService,
    private snackBar: MatSnackBar
  ) {
    this.loading = false;
    this.user = {} as IUser;
    this.resettingPassword = false;
    this.resetCode = '';
    this.newPassword = '';
    this.rememberMe = false;
  }

  public signIn(): void {
    this.loading = true;
    console.log('before');

    this.cognitoService
      .signIn(this.user)
      .then(() => {
        if (this.rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify(this.user));
        } else {
          localStorage.removeItem('rememberedUser');
        }
        return this.cognitoService.getUser();
      })
      .then((attributes: any) => {
        const userType = attributes['custom:user-type'];
        const e_id = attributes['custom:employeeId'];
        console.log('User Type:', userType);
        console.log('Employee id is:', e_id);

        if (userType == 'Admin') {
          console.log('Admin');
          console.log('user type is:', userType);
          this.commonservice.loginflag = true;
          this.router.navigate(['/admin']);
        } else if (userType == 'Employee') {
          console.log('Employee');
          console.log('user type is:', userType);
          this.commonservice.loginflag = true;
          this.router.navigate(['/task-of-employee']);
        } else if (userType == 'Support Engineer') {
          this.commonservice.loginflag = false;
          console.log('Support Engineer');
          console.log('user type is:', userType);
          this.commonservice.loginflag = true;
          this.router.navigate(['/table']);
        } else {
          alert('Please do sign in first..');
        }
      })
      .catch((error) => {
        this.loading = false;
        this.snackBar.open('Please Provide Correct Credentials', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
        });
        console.log(error);
      });
  }

  Onforget() {
    if (this.user && this.user.email) {
      this.cognitoService
        .resetPassword(this.user)
        .then(() => {
          this.resettingPassword = true;
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      console.log('Please Enter a valid email address.');
    }
  }

  newPasswordSumbit() {
    if (this.user && this.user.email && this.newPassword.trim().length != 0) {
      this.cognitoService
        .confirmResetPassword(this.user, this.newPassword.trim())
        .then(() => {
          console.log('Password Updated');
          this.resettingPassword = false;
          this.router.navigate(['/login']);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      console.log('Please Enter valid input code');
    }
  }
}
