import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { ClasificacionConstructoresComponent } from './components/clasificacion-constructores/clasificacion-constructores.component';
import { ClasificacionPilotosComponent } from './components/clasificacion-pilotos/clasificacion-pilotos.component';
import { NuevoCircuitoComponent } from './components/nuevo-circuito/nuevo-circuito.component';
import { NuevoPilotoComponent } from './components/nuevo-piloto/nuevo-piloto.component';
import { SimularCarreraComponent } from './components/simular-carrera/simular-carrera.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { CircuitosListComponent } from './components/circuitos/circuitos-list/circuitos-list.component';
import { CircuitosItemComponent } from './components/circuitos/circuitos-item/circuitos-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EscuderiasItemComponent } from './components/escuderias/escuderias-item/escuderias-item.component';
import { EscuderiasListComponent } from './components/escuderias/escuderias-list/escuderias-list.component';
import { EscuderiasDetailComponent } from './components/escuderias/escuderias-detail/escuderias-detail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    ClasificacionConstructoresComponent,
    ClasificacionPilotosComponent,
    NuevoCircuitoComponent,
    NuevoPilotoComponent,
    SimularCarreraComponent,
    PaginaNoEncontradaComponent,
    CircuitosListComponent,
    CircuitosItemComponent,
    EscuderiasItemComponent,
    EscuderiasListComponent,
    EscuderiasDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
