import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoCircuitoComponent } from './components/nuevo-circuito/nuevo-circuito.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { CircuitosListComponent } from './components/circuitos/circuitos-list/circuitos-list.component';
import { CircuitosItemComponent } from './components/circuitos/circuitos-item/circuitos-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EscuderiasItemComponent } from './components/escuderias/escuderias-item/escuderias-item.component';
import { EscuderiasListComponent } from './components/escuderias/escuderias-list/escuderias-list.component';
import { EscuderiasDetailComponent } from './components/escuderias/escuderias-detail/escuderias-detail.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PilotosListComponent } from './components/pilotos/pilotos-list/pilotos-list.component';
import { PilotosItemComponent } from './components/pilotos/pilotos-item/pilotos-item.component';
import { FilterPilotosPipe } from './components/pilotos/filter-pilotos.pipe';
import { ForDelayDirective } from './components/directives/for-delay.directive';
import { CreadoCircuitoComponent } from './components/nuevo-circuito/creado-circuito/creado-circuito.component';
import { HoverDirective } from './components/directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NuevoCircuitoComponent,
    PaginaNoEncontradaComponent,
    CircuitosListComponent,
    CircuitosItemComponent,
    EscuderiasItemComponent,
    EscuderiasListComponent,
    EscuderiasDetailComponent,
    LoginComponent,
    PilotosListComponent,
    PilotosItemComponent,
    FilterPilotosPipe,
    ForDelayDirective,
    CreadoCircuitoComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
