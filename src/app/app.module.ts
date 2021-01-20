import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { CircuitosComponent } from './components/circuitos/circuitos.component';
import { EscuderiasComponent } from './components/escuderias/escuderias.component';
import { ClasificacionConstructoresComponent } from './components/clasificacion-constructores/clasificacion-constructores.component';
import { ClasificacionPilotosComponent } from './components/clasificacion-pilotos/clasificacion-pilotos.component';
import { NuevoCircuitoComponent } from './components/nuevo-circuito/nuevo-circuito.component';
import { NuevoPilotoComponent } from './components/nuevo-piloto/nuevo-piloto.component';
import { SimularCarreraComponent } from './components/simular-carrera/simular-carrera.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    CircuitosComponent,
    EscuderiasComponent,
    ClasificacionConstructoresComponent,
    ClasificacionPilotosComponent,
    NuevoCircuitoComponent,
    NuevoPilotoComponent,
    SimularCarreraComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
