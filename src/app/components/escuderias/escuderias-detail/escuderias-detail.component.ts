import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escuderias } from '../escuderias';
import { EscuderiasService } from '../escuderias.service';

@Component({
  selector: 'app-escuderias-detail',
  templateUrl: './escuderias-detail.component.html',
  styleUrls: ['./escuderias-detail.component.css']
})
export class EscuderiasDetailComponent implements OnInit {

  escuderia!: Escuderias;

  constructor(private activateRoute: ActivatedRoute, private escuderiasService: EscuderiasService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(e => {
      this.escuderiasService.getEscuderia(e.team_id).subscribe(
        escuderia => this.escuderia = escuderia
      ); //.subscribe(escuderia => this.escuderia = escuderia);    
    });
  }

}
