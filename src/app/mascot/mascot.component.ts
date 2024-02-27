// mascot.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-mascot',
  templateUrl: './mascot.component.html',
  styleUrls: ['./mascot.component.scss']
})
export class MascotComponent {
  showModal = false;
  mascotQuote = 'Hello! Discover the perfect health insurance policy tailored just for you. Your journey to comprehensive coverage starts here. Select the best, safeguard your health."';

  onMascotClick() {
    // Display modal with mascot quote
    this.showModal = true;
  }

  closeModal() {
    // Close modal when clicked outside the content
    this.showModal = false;
  }
}
