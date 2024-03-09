import lottie from 'lottie-web';
import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
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
      path: 'assets/register.json'
    });
  }
}
