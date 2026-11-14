import { Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion';

export const routes: Routes = [
  { path: 'descripcion/:id', component: DescripcionComponent },
  { path: '', redirectTo: 'descripcion/1', pathMatch: 'full' },
  { path: '**', redirectTo: 'descripcion/1', pathMatch: 'full' }
];