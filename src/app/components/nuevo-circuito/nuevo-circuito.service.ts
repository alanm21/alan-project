import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NuevoCircuitoService {

  constructor() { }

  circuito = [];

  getCircuito(){
    return this.circuito;
  }


  setCircuito(x, y, z, w){
    this.circuito = [x, y, z, w];
  }

}
