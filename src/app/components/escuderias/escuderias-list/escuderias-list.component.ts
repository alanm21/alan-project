import { Component, OnInit, Input } from '@angular/core';
import { Escuderias } from '../escuderias';
import { EscuderiasService } from "../escuderias.service";
@Component({
  selector: 'app-escuderias-list',
  templateUrl: './escuderias-list.component.html',
  styleUrls: ['./escuderias-list.component.css']
})
export class EscuderiasListComponent implements OnInit {

  constructor(private escuderiasService: EscuderiasService) { }

  escuderias: Escuderias[] = [];

  @Input() escuderia!: Escuderias;

  ngOnInit(): void {
    this.escuderiasService.getEscuderias().subscribe(
      escuderias => this.escuderias = escuderias
    )
  }

}
