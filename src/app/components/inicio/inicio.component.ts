import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  url = 'https://www.coderhouse.cl/certificados/62203d79bd682b0025237699';
  texto = 'Mostrar credencial';
  
  mostrarAlerta(title: string, imageUrl: string, imageAlt: string, text:string) {
    Swal.fire({
      title: title,
      text: text,
      imageUrl: imageUrl,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: imageAlt,
      confirmButtonColor: '#FA4421'
    });
  }
}
