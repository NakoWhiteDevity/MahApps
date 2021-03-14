import { Injectable } from '@angular/core';;
import { Jugador } from 'src/app/modulos/jugador.class'
import { NumemanoService } from './numemano.service';

//https://desarrolloweb.com/articulos/recorridos-propiedades-objetos-javascript-forin.html
//sessionStorage.clear();

@Injectable({
  providedIn: 'root'
})
export class GenerarjugadoresService {
  
  squad:any;
  squadfin:any;
  
  constructor( private _nm:NumemanoService ){
    console.log("servicio de generar jugadores listo.");
  }
  
  crearJugadores( objetodenombres:any ){
    const j1 = new Jugador( objetodenombres.jugador1 ),
          j2 = new Jugador( objetodenombres.jugador2 ),
          j3 = new Jugador( objetodenombres.jugador3 ),
          j4 = new Jugador( objetodenombres.jugador4 );
    this.squad = [j1,j2,j3,j4];
    this.setStorage(JSON.stringify(this.squad));
  }

  setStorage( squad:any ){
    localStorage.setItem('squad',squad);
    localStorage.setItem('mano',`${this._nm.numemano}`);
  }
  
  getStorage(){
    this.squad = JSON.parse(`${localStorage.getItem('squad')}`);
    this._nm.numemano = JSON.parse(`${localStorage.getItem('mano')}`);
  }

  checkStorage(){
    return JSON.parse(`${localStorage.getItem('squad')}`);
  }

  getNumemano(){
    return JSON.parse(`${localStorage.getItem('mano')}`);
  }
  
  /*
  Forma de parsear el storage:
  getStorage(){
    this.squadtest = JSON.parse(`${localStorage.getItem('squad')}`);
    console.log(this.squadtest);
  }
  */




}
