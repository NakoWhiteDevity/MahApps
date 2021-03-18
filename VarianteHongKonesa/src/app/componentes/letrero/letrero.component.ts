import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/modulos/jugador.class';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';
import { NumemanoService } from 'src/app/servicios/numemano.service';

@Component({
  selector: 'app-letrero',
  templateUrl: './letrero.component.html'
})
export class LetreroComponent implements OnInit{

  listajugadores:any[] = [];
  numemano:number = this._gj.getNumemano();
  vientoronda:string[] = [];
  cambiosillas:string[] = [];
  des:boolean = false;

  //A exportar a hijo:
  plusarray:string[] = this.getplus();
  
  constructor( private _gj:GenerarjugadoresService , private _router:Router , private _nm:NumemanoService ){
  }

  ngOnInit(){
    console.log(this.getplus());
    this._gj.getStorage();
    this.ordenarjugadores();
  }
  
  //Funciones del componente
  iratabla(){
    this._router.navigate(['/tabla']);
  }
  
  quitarpopup(){
    this.cambiosillas[0] = "";
    this.des = false;
  }
  
  cambiodesillas(){
    let caso:string[];
    switch(this.numemano){
      //cambio con el de la derecha
      case 5: case 13: { caso = ["ATENCIÓN: Antes de comenzar la mano, el que esta sentado en la silla referenciada, se cambia con el de su derecha, y los otros dos entre si.","csderecha"] ; this.des = true ; break ; }
      case 9: { caso = ["ATENCIÓN: Antes de comenzar la mano, el que esta sentado en la silla referenciada, se cambia con el de en frente, y los otros dos entre si.","csfrente"] ; this.des = true ; break ; }
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

  //Funciones con el hijo manosplus:
  manomuerta(){
    let pop = confirm(`¿Se declara la mano ${this.numemano} mano muerta?`);
    if (pop == true){
      //DH significa Dead Hand.
      this.plusarray.push("DH");
      localStorage.setItem('plus',`${this.plusarray}`);
      localStorage.getItem('plus')?.split(",");
    }
  }

  getplus(){
    let retornable = localStorage.getItem('plus')?.split(",");
    if (retornable == undefined){
      return [];
    } else {
      return retornable;
    }
  }
  
  //Rutina principal:
  ordenarjugadores(){
    
    let evaluables:any[] = [];
    let trueEvaluables:any[] = [];

    //Funciones que determinan los valores de los jugadores "blandos".
    const puntuado = (sujeto:Jugador):number => {
      return sujeto.puntuacion[sujeto.puntuacion.length - 1];
    }

    const superado = (sujeto:Jugador):number => {
      let caso = 0;
      let sujeto1 = { nombre : sujeto.nombre , puntos : puntuado(sujeto) };
      for(let jugador in this._gj.squad){
        if( sujeto1.nombre !== this._gj.squad[jugador].nombre ){
          let sujeto2 = { puntos : this._gj.squad[jugador].puntuacion[this._gj.squad[jugador].puntuacion.length - 1] };
          (sujeto1.puntos < sujeto2.puntos) ? caso++ : caso = caso;
        }
      }
      return caso;
    }

    const viento = (sujeto:Jugador):string => {
      return sujeto.arrayvientos[this.numemano - 1]
    }
    
    for(let jugador in this._gj.squad){
      let sujeto:Jugador = this._gj.squad[jugador];
      let evaluado = {
        nombre : sujeto.nombre,
        puntos : puntuado(sujeto),
        superaa : superado(sujeto),
        viento : viento(sujeto)
      }
      evaluables.push(evaluado);
    }

    for(let i=0;i<4;i++){
      evaluables.forEach( jugador => {
        if(jugador.superaa == i){ trueEvaluables.push(jugador) }
      });
    }

    //La lista de jugadores es el objeto que consume el letrero para renderizar luego el letrero. Igualalo a la colección que quieres crear para usarla.
    this.listajugadores = trueEvaluables;
    this._gj.squadfin = trueEvaluables;
    if (this.numemano == 17) {this._router.navigate(['/findejuego']);};
    this.vientoderonda();
    this.cambiodesillas();
  }
}
