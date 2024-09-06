import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css',
})
export class ServicePageComponent {
  cards = [
    {
      image: '/assets/svg-cards-service/bulbo-amarillo.svg',
      text: 'Instalaciones eléctricas',
    },
    {
      image: '/assets/svg-cards-service/repair-yellow.svg',
      text: 'Mantenimiento y reparación de sistemas eléctricos',
    },
    {
      image: '/assets/svg-cards-service/EV-amarillo.svg',
      text: 'Cargadores EV',
    },
    {
      image: '/assets/svg-cards-service/solar-amarillo.svg',
      text: 'Paneles Solares',
    },
    {
      image: '/assets/svg-cards-service/emergencia-amarillo.svg',
      text: 'Servicios de Emergencia',
    },
  ];
}
