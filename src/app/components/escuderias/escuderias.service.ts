import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Escuderias } from './escuderias';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EscuderiasService {

  constructor(private http: HttpClient) { }

  private escuderiasURL = '/assets/json/Escuderias.json';

  getEscuderias(): Observable<Escuderias[]> { // retorna un observable al que cal subscriure's
    return this.http.get<{ escuderias: Escuderias[] }>(this.escuderiasURL).pipe(
      map(response => response.escuderias) // de la resposta traguem l'array que ens interessa
    );
  }

  getEscuderia(team_id: number): Observable<Escuderias> { // retorna un observable al que cal subscriure's
    return this.http.get<{ escuderias: Escuderias[] }>(this.escuderiasURL).pipe(
      map(response => response.escuderias.filter(e => e.team_id === team_id)[0])
    )
  }

}
