import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';
import { NumemanoService } from 'src/app/servicios/numemano.service';
import { LetreroComponent } from '../letrero/letrero.component';

@Component({
  selector: 'app-formahjong',
  templateUrl: './formahjong.component.html'
})
export class FormahjongComponent implements OnInit {

  forma:FormGroup;
  squad:any[] = []
  numemano:number = this._nm.numemano;
  
  constructor( private _router : Router , private _gj:GenerarjugadoresService , private _nm:NumemanoService , private _fb : FormBuilder){
    this.forma = this._fb.group({
      ganamano : new FormControl('',Validators.required),
      dealer : new FormControl('',Validators.required),
      puntuacion : ['',Validators.required]
    })
  }
  
  iraletrero(){
    this._router.navigate(['/letrero']);
  }

  indicadormuro(nombre:string,rid?:boolean):string{
    let caso:string;
    if (nombre == this.forma.value.ganamano){
      caso = "DE MURO";
    } else {
      switch(rid){
        case true : { caso = `${nombre}R` ; break ; }
        default : { caso = nombre ; break ; }
      }
    }
    return caso;
  }
  
  ngOnInit(): void {
    for(let jugador in this._gj.squad){
      this.squad.push(this._gj.squad[jugador]);
    }
  }

  submitvalido():boolean{
    let caso:boolean;
    if(this.forma.value.ganamano != "" && this.forma.value.dealer != "" && this.forma.value.puntuacion >= 8){
      caso = false;
    } else {
      caso = true;
    }
    return caso;
  }
  
  //Rutina principal:
  guardar(){

    this.squad = [];
    for(let jugador in this._gj.squad){
      this.squad.push(this._gj.squad[jugador]);
    }
    
    let datosform = this.forma.value,
        demuro:boolean,
        sujeto:any;

    const sumademuro = (sujeto:any) => {
      let epuntos:number = 0;
      for (let jugador in this.squad){
        if(sujeto.nombre !== this.squad[jugador].nombre){
          let victima = this.squad[jugador];
          let pago:number = (datosform.puntuacion + 8);
          epuntos = epuntos + pago
          victima.puntuacion.push((victima.puntuacion[victima.puntuacion.length - 1]) - pago);
        }
      }
      sujeto.puntuacion.push(epuntos);
    }

    const sumadedealer = (sujeto:any) => {
      let epuntos:number = 0;
      for(let jugador in this.squad){
        if(sujeto.nombre !== this.squad[jugador].nombre){
          let victima = this.squad[jugador];
          if (victima.nombre == datosform.dealer){
            let pago:number = (datosform.puntuacion + 8);
            epuntos = epuntos + pago;
            victima.puntuacion.push( (victima.puntuacion[victima.puntuacion.length - 1]) - pago );
          } else {
            let pago:number = 8;
            epuntos = epuntos + pago;
            victima.puntuacion.push( (victima.puntuacion[victima.puntuacion.length - 1]) - pago );
          }
        }
      }
      sujeto.puntuacion.push(epuntos);
    }
    
    if ( datosform.ganamano == datosform.dealer ){
      demuro = true;
    } else {
      demuro = false;
    }
    
    for(let jugador in this.squad){
      if (datosform.ganamano == this.squad[jugador].nombre){
        sujeto = this.squad[jugador];
      }
    }

    switch(demuro){
      case true : { sumademuro(sujeto) ; break ; }
      case false : { sumadedealer(sujeto) ; break ; }
    }
    
    this._nm.incrementarnumemano();
    this._router.navigate(['/letrero']);
    
  }

}
