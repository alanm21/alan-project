import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CircuitosComponent } from './components/circuitos/circuitos.component';
import { EscuderiasComponent } from './components/escuderias/escuderias.component';
import { ClasificacionConstructoresComponent } from './components/clasificacion-constructores/clasificacion-constructores.component';
import { ClasificacionPilotosComponent } from './components/clasificacion-pilotos/clasificacion-pilotos.component';
import { NuevoCircuitoComponent } from './components/nuevo-circuito/nuevo-circuito.component';
import { SimularCarreraComponent } from './components/simular-carrera/simular-carrera.component';
import { NuevoPilotoComponent } from './components/nuevo-piloto/nuevo-piloto.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'circuitos', component: CircuitosComponent},
  {path: 'escuderias', component: EscuderiasComponent},
  {path: 'clasificacion-constructores', component: ClasificacionConstructoresComponent},
  {path: 'clasificacion-pilotos', component: ClasificacionPilotosComponent},
  {path: 'nuevo-circuito', component: NuevoCircuitoComponent},
  {path: 'nuevo-piloto', component: NuevoPilotoComponent},
  {path: 'simular-carrera', component: SimularCarreraComponent},
  {path: 'pagina-no-encontrada', component: PaginaNoEncontradaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'pagina-no-encontrada'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
