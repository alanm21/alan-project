import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoCircuitoService } from './nuevo-circuito.service';

@Component({
  selector: 'app-nuevo-circuito',
  templateUrl: './nuevo-circuito.component.html',
  styleUrls: ['./nuevo-circuito.component.css']
})
export class NuevoCircuitoComponent implements OnInit {

  constructor(private nuevoCircuitoService: NuevoCircuitoService, private router: Router) { }

  formAlan: FormGroup;

  ngOnInit(): void {
    this.formAlan = new FormGroup(
      {
        nombreGP: new FormControl("Yas Marina GP", [Validators.maxLength(15)]),
        nombreCircuito: new FormControl("Circuito Yas Marina", [Validators.maxLength(20)]),
        paisLocalizacion: new FormControl("Emiratos Árabes Unidos", [Validators.required]),
        email: new FormControl("Email del creador", comprobarArroba),
      }
    )
  }

  //Guardem asi un array i en creado-circuito-component.html
  submit(){
    this.nuevoCircuitoService.setCircuito(this.formAlan.controls.nombreGP.value, this.formAlan.controls.nombreCircuito.value,
      this.formAlan.controls.paisLocalizacion.value, this.formAlan.controls.email.value  )

    this.router.navigate(['nuevo-circuito/creado-circuito'])

  }

}

export function comprobarArroba(control : AbstractControl) {
  if (control.value.includes('@')) {
    return null; //Si esta be
  } else {
    return {arroba: 'No contiene un arroba @.'}
  }
}
