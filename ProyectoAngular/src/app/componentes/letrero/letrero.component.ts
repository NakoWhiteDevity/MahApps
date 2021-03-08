import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';
import { NumemanoService } from 'src/app/servicios/numemano.service';

@Component({
  selector: 'app-letrero',
  templateUrl: './letrero.component.html'
})
export class LetreroComponent implements OnInit{

  listajugadores:any[] = [];
  numemano:number = this._nm.numemano;
  vientoronda:string[] = [];
  cambiosillas:string[] = [];
  
  constructor( private _gj:GenerarjugadoresService , private _router:Router , private _nm:NumemanoService ){}

  ngOnInit(){
    this.ordenarjugadores();
  }
  
  iratabla(){
    this._router.navigate(['/tabla']);
  }
  
  quitarpopup(){
    this.cambiosillas[0] = "";
  }
  
  cambiodesillas(){
    let caso:string[];
    switch(this.numemano){
      //cambio con el de la derecha
      case 5: case 13: { caso = ["ATENCIÓN: Antes de comenzar la mano, el que esta sentado en la silla referenciada, se cambia con el de su derecha, y los otros dos entre si.","csderecha"] ; break ; }
      case 9: { caso = ["ATENCIÓN: Antes de comenzar la mano, el que esta sentado en la silla referenciada, se cambia con el de en frente, y los otros dos entre si.","csfrente"] ; break ; }
      default: { caso = ["",""] ; break ; }
    }
    this.cambiosillas = caso;
  }
  
  vientoderonda(){
    let numeronda = (this.numemano / 4.001) + 1 ;numeronda = Math.floor(numeronda);
    let caso = new Array();
    switch( numeronda ){
      case 1 : { caso = ["este","東"] ; break ; }
      case 2 : { caso = ["sur","南"] ; break ; }
      case 3 : { caso = ["oeste","西"] ; break ; }
      case 4 : { caso = ["norte","北"] ; break ; }
    }
    this.vientoronda = caso;
  }
  
  //Rutina principal:
  ordenarjugadores(){
    
    let evaluables:any[] = [];
    let trueEvaluables:any[] = [];

    const puntuado = (sujeto:any):number => {
      return sujeto.puntuacion[sujeto.puntuacion.length - 1];
    }


    const superaa = (sujeto:any):number => {
      let retornable = 0;
      let sujeto1 = { nombre : sujeto.nombre , puntos : puntuado(sujeto) }
      for(let jugador in this._gj.squad){
        if( sujeto1.nombre !== this._gj.squad[jugador].nombre ){
          let sujeto2 = { puntos : this._gj.squad[jugador].puntuacion[this._gj.squad[jugador].puntuacion.length - 1] };
          ( sujeto1.puntos > sujeto2.puntos ) ? retornable++ : retornable = retornable ;
        }
      }
    return retornable;
    }

    const viento = (sujeto:any):string => {
      return sujeto.arrayvientos[this.numemano - 1]
    }
    
    for(let jugador in this._gj.squad){
      let sujeto:any = this._gj.squad[jugador];
      let evaluado = {
        nombre : sujeto.nombre,
        puntos : puntuado(sujeto),
        superandos : superaa(sujeto),
        viento : viento(sujeto)
      }
      evaluables.push(evaluado);
    }

    for(let i=4;i>=0;i--){
      evaluables.forEach( jugador => {
        if(jugador.superandos == i){ trueEvaluables.push(jugador) }
      });
    }

    //La lista de jugadores es el objeto que consume el letrero para renderizar luego el letrero. Igualalo a la colección que quieres crear para usarla.
    this.listajugadores = trueEvaluables;
    this.vientoderonda();
    this.cambiodesillas();
  }
}
