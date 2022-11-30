import { Component } from '@angular/core';
import { tarjeta1 } from './pantalla1/tarjeta1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea-7';
  trjetas: tarjeta1[]=[{
imagen: {
  src: "https://m.media-amazon.com/images/I/A1CAWj4RgKL._SS500_.jpg",
  alt: "Imagen 1"
},
nombre: "October 17",
id: "1"

  }]

  
}
