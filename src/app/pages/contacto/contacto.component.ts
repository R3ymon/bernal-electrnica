import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappIconComponent } from '../../components/whatsapp-icon/whatsapp-icon.component';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    FooterComponent,
    WhatsappIconComponent,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
