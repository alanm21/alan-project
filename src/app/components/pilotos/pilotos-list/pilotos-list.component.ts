import { Component, OnInit } from '@angular/core';
import { Pilotos } from '../../escuderias/pilotos';
import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrls: ['./pilotos-list.component.css']
})
export class PilotosListComponent implements OnInit {

  constructor(private pilotosService: PilotosService) { }

  pilotos: Pilotos[] = [];

  criteri!: string;

  ngOnInit(): void {
    this.pilotosService.getPilotos().subscribe(
      pilotos => this.pilotos = pilotos
    )
  }

  mostrar: boolean = false;
  mensaje() {
    this.mostrar = true;
    setTimeout(() => {
      this.mostrar = false;
    }, 5000);
  }

}
