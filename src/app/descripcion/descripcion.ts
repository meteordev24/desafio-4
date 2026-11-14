import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './descripcion.html',
  styleUrls: ['./descripcion.css']
})
export class DescripcionComponent implements OnInit {
  productos = [
    { id: 1, nombre: 'Faro Delantero Izquierdo Hilux', precio: 135, imagenUrl: 'headphones.jpg', tipoEnvio: 'Envío Gratis' },
    { id: 2, nombre: 'Parachoques Tunning Negro', precio: 80, imagenUrl: 'laptop.jpg', tipoEnvio: 'Envío Estándar' },
    { id: 3, nombre: 'Tapa Copa Rin Centro Aveo', precio: 25, imagenUrl: 'phone.jpg', tipoEnvio: 'Envío Gratis' },
    { id: 4, nombre: 'Aceite Motor Motul 15W-40', precio: 850, imagenUrl: 'watch.jpg', tipoEnvio: 'Envío Express' },
    { id: 5, nombre: 'Faro Delantero Derecho Hilux', precio: 135, imagenUrl: 'headphones.jpg', tipoEnvio: 'Envío Gratis' },
    { id: 6, nombre: 'Software SGT Contable', precio: 40, imagenUrl: 'laptop.jpg', tipoEnvio: 'Descarga Digital' },
    { id: 7, nombre: 'Windows Server Standard', precio: 25, imagenUrl: 'phone.jpg', tipoEnvio: 'Envío Gratis' },
    { id: 8, nombre: 'Sistema POS Restaurantes', precio: 380, imagenUrl: 'watch.jpg', tipoEnvio: 'Envío Gratis' },
    { id: 9, nombre: 'Audífonos Micrófono Pc-900 Para Computadora Stereo Headset', precio: 220, imagenUrl: 'assets/audifonos.jpg', tipoEnvio: 'Envío gratis a todo el país' },
    { id: 10, nombre: 'Kit Memorias RAM Kingston', precio: 95, imagenUrl: 'keyboard.jpg', tipoEnvio: 'Envío Gratis' }
  ];

  productoSeleccionado: any;

  constructor(
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const idNum = Number(idParam);
      this.productoSeleccionado = this.productos.find(p => p.id === idNum);
      this.cdRef.detectChanges();
    });
  }
}