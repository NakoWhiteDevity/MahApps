import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jugador } from '../../modulos/jugador.class';
import { GenerarjugadoresService } from '../../servicios/generarjugadores.service';
import { NumemanoService } from '../../servicios/numemano.service';

@Component({
  selector: 'app-formahjong',
  templateUrl: './formahjong.component.html'
})
export class FormahjongComponent implements OnInit {

  forma:FormGroup;
  squad:Jugador[] = [];
  numemano:number = this._nm.numemano;
  
  constructor( private _router : Router , private _gj:GenerarjugadoresService , private _nm:NumemanoService , private _fb : FormBuilder){
    this.forma = this._fb.group({
      ganamano : new FormControl('',Validators.required),
      dealer : new FormControl('',Validators.required),
      puntuacion : ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this._gj.getStorage();
    for(let jugador in this._gj.squad){
      this.squad.push(this._gj.squad[jugador]);
    }
  }
  
  iraletrero(){
    this._router.navigate(['letreroChina','letrero']);
  }

  //Esta funcion cambia el nombre del label de la segunda pregunta a de muro, para no tener que decir que la ultima ficha la cedio el jugador que gano la ronda.
  indicadormuro(nombre:string):string{
    let caso:string;
    if (nombre == this.forma.value.ganamano){
      caso = "DE MURO";
      return caso
    }
    return nombre;
  }
  
  submitvalido():boolean{
    let caso:boolean;
    if(this.forma.value.ganamano != "" && this.forma.value.dealer != "" && this.forma.value.puntuacion >= 8 && this.forma.value.puntuacion <= 1100){ caso = false; } else { caso = true; } return caso;
  }
  
  //Rutina principal:
  guardar(){
    
    let datosform = this.forma.value,
        ganador:string = datosform.ganamano,
        dealer:string = datosform.dealer,
        puntos:number = datosform.puntuacion,
        demuro:boolean = (ganador == dealer) ? true : false;

    const sumademuro = (sujeto:Jugador) => {
      let epuntos:number = 0;
      for (let jugador in this.squad){
        if(sujeto.nombre !== this.squad[jugador].nombre){
          let victima:Jugador = this.squad[jugador];
          let pago:number = (puntos + 8);
          epuntos = epuntos + pago;
          victima.puntuacion.push((victima.puntuacion[victima.puntuacion.length - 1]) - pago);
        }
      }
      sujeto.puntuacion.push((sujeto.puntuacion[sujeto.puntuacion.length - 1]) + epuntos);
    }

    const sumadedealer = (sujeto:Jugador) => {
      let epuntos:number = 0;
      for(let jugador in this.squad){
        if(sujeto.nombre !== this.squad[jugador].nombre){
          let victima:Jugador = this.squad[jugador];
          if (victima.nombre == dealer){
            let pago:number = (puntos + 8);
            epuntos = epuntos + pago;
            victima.puntuacion.push( (victima.puntuacion[victima.puntuacion.length - 1]) - pago );
          } else {
            let pago:number = 8;
            epuntos = epuntos + pago;
            victima.puntuacion.push( (victima.puntuacion[victima.puntuacion.length - 1]) - pago );
          }
        }
      }
      sujeto.puntuacion.push((sujeto.puntuacion[sujeto.puntuacion.length - 1]) + epuntos);
    }
    
    for(let jugador in this.squad){
      if (ganador == this.squad[jugador].nombre){
        let sujeto:Jugador = this.squad[jugador];
        switch(demuro){
          case true : { sumademuro(sujeto) ; break ; }
          case false : { sumadedealer(sujeto) ; break ; }
        }
      }
    }

    this._nm.incrementarnumemano();
    this._gj.setStorage(JSON.stringify(this._gj.squad));
    this._router.navigate(['letreroChina','letrero']);
  
  }

}
