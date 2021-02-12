import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Escuderias } from './escuderias';
import { Pilotos } from './pilotos';
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
      map(response => {
        console.log(response);
        return response.escuderias.filter(e => e.team_id == team_id)[0]
      }) //true si no funciona
    )
  }

  //Ara importe els pilotos
  private pilotosURL = '/assets/json/Pilotos.json';
  getPiloto(escuderia_actual: string): Observable<Pilotos[]> { // retorna un observable al que cal subscriure's
    return this.http.get<{ pilotos: Pilotos[] }>(this.pilotosURL).pipe(
      map(response => {
        console.log("Trau els pilotos: " + response);
        return response.pilotos.filter(e => e.escuderia_actual === escuderia_actual)
      }) //true si no funciona
    )
  }
}
