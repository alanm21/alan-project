import { Component, OnInit, Input } from '@angular/core';
import { Escuderias } from "../escuderias";
import { EscuderiasService } from '../escuderias.service';

@Component({
  selector: 'app-escuderias-item',
  templateUrl: './escuderias-item.component.html',
  styleUrls: ['./escuderias-item.component.css']
})
export class EscuderiasItemComponent implements OnInit {


  constructor(private escuderiasService: EscuderiasService) { }


  @Input() escuderia!: Escuderias;

  ngOnInit(): void {
    this.escuderiasService.getEscuderia(this.escuderia.team_id).subscribe(
      escuderia => this.escuderia = escuderia    
    )
  }

}
