import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { WhatsappIconComponent } from './components/whatsapp-icon/whatsapp-icon.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    ServicePageComponent,
    WhatsappIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bernal-electrica';
}
