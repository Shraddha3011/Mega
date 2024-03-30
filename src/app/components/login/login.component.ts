import { AuthService } from 'src/app/services/auth.service';
import lottie from 'lottie-web';
import { Component, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user:any;
  constructor(
    public authService: AuthService,private elementRef: ElementRef
  ) { }
  ngOnInit(): void {

    const animation = lottie.loadAnimation({
      container: this.elementRef.nativeElement.querySelector('.image-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/login1.json'
    });
  }
}
