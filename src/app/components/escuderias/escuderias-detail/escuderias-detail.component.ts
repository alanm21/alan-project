import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escuderias } from '../escuderias';
import { EscuderiasService } from '../escuderias.service';
import { Pilotos } from '../pilotos';

@Component({
  selector: 'app-escuderias-detail',
  templateUrl: './escuderias-detail.component.html',
  styleUrls: ['./escuderias-detail.component.css']
})
export class EscuderiasDetailComponent implements OnInit {

  escuderia!: Escuderias;
  pilotos: Pilotos[] = [];

  constructor(private activateRoute: ActivatedRoute, private escuderiasService: EscuderiasService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(e => {
      this.escuderiasService.getEscuderia(e.team_id).subscribe(
        escuderia => {
          this.escuderia = escuderia
          console.log("Console log per a vore que retorna escuderia: " + escuderia);

          this.escuderiasService.getPiloto(escuderia.nombre).subscribe(
            pilotos => {
              console.log("Listado de pilotos:" + pilotos);
              this.pilotos = pilotos
              console.log(pilotos);//Este log trau els dos pilotos
            }
            
          )

        }
      );
    });
  }

}