import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevoCircuitoComponent } from './components/nuevo-circuito/nuevo-circuito.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { CircuitosListComponent } from './components/circuitos/circuitos-list/circuitos-list.component';
import { EscuderiasListComponent } from './components/escuderias/escuderias-list/escuderias-list.component';
import { EscuderiasDetailComponent } from './components/escuderias/escuderias-detail/escuderias-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './user/auth.guard';
import { PilotosListComponent } from './components/pilotos/pilotos-list/pilotos-list.component';
import { CreadoCircuitoComponent } from './components/nuevo-circuito/creado-circuito/creado-circuito.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'circuitos',
   canActivate: [AuthGuard],
   component: CircuitosListComponent},
  {path: 'escuderias', component: EscuderiasListComponent},
  {path: 'pilotos', component: PilotosListComponent},
  {path: 'escuderia/:team_id', component: EscuderiasDetailComponent},
  {path: 'nuevo-circuito', component: NuevoCircuitoComponent},
  {path: 'nuevo-circuito/creado-circuito', component: CreadoCircuitoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pagina-no-encontrada', component: PaginaNoEncontradaComponent},

  {path: '', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'pagina-no-encontrada'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
