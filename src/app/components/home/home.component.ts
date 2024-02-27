// home.component.ts

import { AfterViewInit, Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.playAnimation();
  }

  private playAnimation() {
    const elements = this.el.nativeElement.querySelectorAll('.welcome-text h1 .insura, .welcome-text h1 .match');

    elements.forEach((element: HTMLElement) => {
      this.renderer.removeClass(element, 'animated');
      void element.offsetWidth; // Trigger a reflow to restart the animation
      this.renderer.addClass(element, 'animated');
    });
  }
}
