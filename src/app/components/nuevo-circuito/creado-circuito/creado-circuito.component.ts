import { Component, OnInit } from '@angular/core';
import { NuevoCircuitoService } from '../nuevo-circuito.service';

@Component({
  selector: 'app-creado-circuito',
  templateUrl: './creado-circuito.component.html',
  styleUrls: ['./creado-circuito.component.css']
})
export class CreadoCircuitoComponent implements OnInit {

  constructor(private nuevoCircuitoService: NuevoCircuitoService) { }

  circuitoInfo = [];

  ngOnInit(): void {
    console.log("Estas en el nuevo circuito");
    this.nuevoCircuitoService.getCircuito();
    console.log(this.nuevoCircuitoService.getCircuito());

    this.circuitoInfo = this.nuevoCircuitoService.getCircuito();
    console.log("Log Circuito Info: " + this.circuitoInfo);


  }

}
