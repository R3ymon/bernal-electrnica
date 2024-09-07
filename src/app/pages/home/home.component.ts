import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HomePageComponent } from '../../components/home-page/home-page.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServicePageComponent } from '../../components/service-page/service-page.component';
import { WhatsappIconComponent } from '../../components/whatsapp-icon/whatsapp-icon.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    ServicePageComponent,
    WhatsappIconComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
