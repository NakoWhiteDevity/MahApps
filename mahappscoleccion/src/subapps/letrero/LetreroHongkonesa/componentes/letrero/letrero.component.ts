import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../../modulos/jugador.class';
import { GenerarjugadoresService } from '../../servicios/generarjugadores.service';
import { ManosplusService } from '../../servicios/manosplus.service';
import { NumemanoService } from '../../servicios/numemano.service';

@Component({
  selector: 'app-letrero',
  templateUrl: './letrero.component.html'
})
export class LetreroComponent implements OnInit , AfterViewChecked {

  listajugadores:any[] = [];
  numemano:number = this._nm.numemano;
  vientoronda:string[] = [];
  despadre:boolean;
  
  constructor( private _gj:GenerarjugadoresService , private _router:Router , private _nm:NumemanoService , private _mp:ManosplusService , private _cdr:ChangeDetectorRef ){
    this.despadre = false;
  }

  //La linea que resuelve el problema: NG0100: Expression has changed after it was checked. Basicamente lo que hace es tras llegar a esta fase del ciclo de vida, aplicar los cambios sucedidos desde el init, en vez de quejarse.
  ngAfterViewChecked(){this._cdr.detectChanges();}
  
  ngOnInit(){
    this._gj.getStorage();
    this.ordenarjugadores();
  }

  //Funciones del componente
  deshabilita(evento:boolean){
    this.despadre = evento;
  }
  
  iratabla(){
    this._router.navigate(['letreroHongkonesa','tabla']);
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

  manomuerta(){
    let pop = confirm(`¿Se declara la mano ${this._nm.numemano} mano muerta?`);
    if (pop == true){
      //DH significa Dead Hand.
      this._mp.manosplus.push("DH");
      localStorage.setItem('plus',`${this._mp.manosplus}`);
      location.reload();
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
    if (this.numemano == 17) {this._router.navigate(['letreroChina','findejuego']);};
    this.vientoderonda();
    //this.cambiodesillas();
  }
}
