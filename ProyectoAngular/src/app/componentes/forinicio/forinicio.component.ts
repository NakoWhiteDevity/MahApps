import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';
import { ValidarformularioinicioService } from 'src/app/servicios/validarformularioinicio.service';

@Component({
  selector: 'app-forinicio',
  templateUrl: './forinicio.component.html'
})
export class ForinicioComponent{

  forinicio : FormGroup;
  validado = false;
  
  constructor( private _formBuilder:FormBuilder , private _vfi:ValidarformularioinicioService , private _router : Router , private _gj:GenerarjugadoresService){
    this.forinicio = this._formBuilder.group({
      jugador1 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      jugador2 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      jugador3 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      jugador4 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]]
    });
  }

  mostrar(){
    if (this._vfi.sonValidos(this.forinicio.value,this.forinicio.valid)){
      this._gj.crearJugadores(this.forinicio.value);
      this._router.navigate(['/sillas']);
    } else {
      //El formulario no entra correctamente:
      console.log("se debe de reiniciar el formulario");
      this.forinicio.reset();
      this.validado = true;
    }
  }

}
