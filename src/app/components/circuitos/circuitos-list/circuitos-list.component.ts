import { Component, OnInit } from '@angular/core';
import { CircuitosService } from '../circuitos.service';
import { Circuitos } from '../circuitos';

@Component({
  selector: 'app-circuitos-list',
  templateUrl: './circuitos-list.component.html',
  styleUrls: ['./circuitos-list.component.css']
})
export class CircuitosListComponent implements OnInit {

  constructor(private ciruitosService: CircuitosService) { }

  circuitos: Circuitos[] = [];

  ngOnInit(): void {
    this.ciruitosService.getCircuitos().subscribe(
      circuitos => this.circuitos = circuitos    
    )
  }

}
