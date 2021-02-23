import { Component, Input, OnInit } from '@angular/core';
import { Pilotos } from '../../escuderias/pilotos';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pilotos-item',
  templateUrl: './pilotos-item.component.html',
  styleUrls: ['./pilotos-item.component.css']
})
export class PilotosItemComponent implements OnInit {

  constructor() { }

  @Input() piloto!: Pilotos;

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();

  mostrarMensajeInfo() {
    this.newItemEvent.emit("Hola");
  }

}
