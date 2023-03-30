import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { InicioComponent } from  './components/inicio/inicio.component'
import { FormularioComponent } from './components/formulario/formulario.component';
const routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: '', component: InicioComponent },
  { path: 'contacto', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
