import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerarjugadoresService } from '../../servicios/generarjugadores.service';
import { ValidarformularioinicioService } from '../../servicios/validarformularioinicio.service';

@Component({
  selector: 'app-forinicio',
  templateUrl: './forinicio.component.html'
})
export class ForinicioComponent implements OnInit{

  forinicio : FormGroup;
  validado = false;
  
  constructor( private _formBuilder:FormBuilder , private _vfi:ValidarformularioinicioService , private _router : Router , private _gj:GenerarjugadoresService){
    this.forinicio = this._formBuilder.group({
      jugador1 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      jugador2 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      jugador3 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      jugador4 : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]]
    });
    console.log(_router.url);
  }

  ngOnInit(){
    let squadstorage = this._gj.checkStorage();
    if (squadstorage[1] == true){ localStorage.clear() ; window.location.reload() ; };
    if (squadstorage[0] !== null){ this._router.navigate(['letreroChina','letrero']) ; }
  }

  mostrar(){
    if (this._vfi.sonValidos(this.forinicio.value,this.forinicio.valid)){
      this._gj.crearJugadores(this.forinicio.value);
      this._router.navigate(['letreroChina','sillas'])
    } else {
      //El formulario no entra correctamente:
      console.log("se debe de reiniciar el formulario");
      this.forinicio.reset();
      this.validado = true;
    }
  }

}
