import { Pipe, PipeTransform } from '@angular/core';
import { Pilotos } from '../escuderias/pilotos';

@Pipe({
  name: 'filterPilotos'
})
export class FilterPilotosPipe implements PipeTransform {

  transform(pilotos: Pilotos[], criteri: string): Pilotos[] {
    criteri != criteri ? criteri.toLowerCase() : null; //Si existix el pasa a min sino null
    pilotos = criteri ? pilotos.filter(p => p.nombre.toLowerCase().includes(criteri)) : pilotos;//Si hi ha criteri
    return pilotos;
  }

}
