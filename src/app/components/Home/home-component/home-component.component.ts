import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
})
export class HomeComponentComponent {
  slides = [
    { image: 'assets/electricafoto.webp' },
    { image: 'assets/bernallogo.png' },
    { image: 'assets/electricafoto.webp' },
  ];

  currentSlide = 0;

  previousSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
