import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pilotos } from './pilotos';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  pilotosList: Pilotos[] = [];

  private pilotosURL = '/assets/json/Pilotos.json';

  constructor(private http: HttpClient) { }

  getPilotos(): Observable<Pilotos[]>{ // retorna un observable al que cal subscriure's
    return this.http.get<{pilotos: Pilotos[]}>(this.pilotosURL).pipe(
      map(response => response.pilotos) // de la resposta traguem l'array que ens interessa
    ); 
  }



}
