import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Si la página ha sido desplazada más de 50px, cambia el estado a true
    this.scrolled = scrollTop > 50;
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
