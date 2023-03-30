import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  constructor(private router: Router) {}

  navegarAComponente1() {
    this.router.navigate(['/portafolio']);
  }
  mostrarAlerta(title: string, imageUrl: string, imageAlt: string,
     urlSitio:string, nombreSitio:string) {
    Swal.fire({
      title: title,
      imageUrl: imageUrl,
      imageWidth: 500,
      imageAlt: imageAlt,
      html: `<a href="${urlSitio}" target="_BLANCK">${nombreSitio}</a>`,
      confirmButtonColor: '#FA4421'
    });
  }
}
