
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  name: any;
  email: any;
  asunto : any;
  mensaje: any;
  responseMessage?: any;
  showResponseMessage: boolean = false;
  responseType: string = '';
   
  

  constructor(private http: HttpClient) {}
  enviado: boolean = false;
  onSubmit() {
    
    const data = {
      name: this.name,
      email: this.email,
      asunto: this.asunto,
      mensaje: this.mensaje
    };
    
    if(!this.name || !this.email || !this.asunto || !this.mensaje){
      this.showResponseMessage = true;
       this.responseMessage = 'Debe rellenar todos los campos';
       this.responseType = 'error';
       setTimeout(() => {
        this.showResponseMessage = false;
      }, 3000);
    }else{
      
       this.http.post('https://mailbackend.jppc.cl/public/api/correo', data, { headers: { 'Content-Type': 'application/json' }})
      .subscribe(response => {
        console.log("Respuesta",response);
        
          this.showResponseMessage = true;
          this.responseType = 'success';
          this.responseMessage = (<any>response).msg;
          this.name = ''
          this.email = ''
          this.asunto = ''
          this.mensaje = ''
          setTimeout(() => {
            this.showResponseMessage = false;
          }, 3000);
       
      });
    }

   
  }
}
