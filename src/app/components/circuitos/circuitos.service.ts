import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, filter} from 'rxjs/operators'
import { Circuitos } from 'src/app/components/circuitos/circuitos';


@Injectable({
  providedIn: 'root'
})

export class CircuitosService {
  
  circuitosList: Circuitos[] = [];

  private circuitosURL = '/assets/json/Circuitos.json';

  constructor(private http: HttpClient) { }

  getCircuitos(): Observable<Circuitos[]>{ // retorna un observable al que cal subscriure's
    return this.http.get<{circuitos: Circuitos[]}>(this.circuitosURL).pipe(
      map(response => response.circuitos) // de la resposta traguem l'array que ens interessa
    ); 
  }

}
