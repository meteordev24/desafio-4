import { Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion';
import { LoginComponent } from './login-template/login-template'; 

export const routes: Routes = [
  { path: 'descripcion/:id', component: DescripcionComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'descripcion/1', pathMatch: 'full' },
  { path: '**', redirectTo: 'descripcion/1', pathMatch: 'full' }
];