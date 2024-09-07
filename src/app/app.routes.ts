import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NonfoundComponent } from './pages/nonfound/nonfound.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '**',
    component: NonfoundComponent,
  },
];
