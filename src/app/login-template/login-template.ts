import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-template.html',
  styleUrl: './login-template.css'
})
export class LoginComponent {
  usuario = {
    username: '',
    contrasena: '',
    correo: ''
  };

  onSubmit() {
    console.log('Datos del formulario de plantilla:', this.usuario);
  }
}