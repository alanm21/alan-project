import { Component, OnInit, Input } from '@angular/core';
import { Circuitos } from '../circuitos';

@Component({
  selector: 'app-circuitos-item',
  templateUrl: './circuitos-item.component.html',
  styleUrls: ['./circuitos-item.component.css']
})
export class CircuitosItemComponent implements OnInit {

  constructor() { }

  @Input() circuito!: Circuitos;

  ngOnInit(): void {
    
  }

}
