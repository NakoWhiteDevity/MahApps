import { Injectable } from '@angular/core';
import { Jugador } from 'src/app/modulos/jugador.class'

//https://desarrolloweb.com/articulos/recorridos-propiedades-objetos-javascript-forin.html

@Injectable({
  providedIn: 'root'
})
export class GenerarjugadoresService {
  
  squad:any;
  squadfin:any;
  
  constructor(){
    console.log("servicio de generar jugadores listo.");
  }
  
  crearJugadores( objetodenombres:any ){
    const j1 = new Jugador( objetodenombres.jugador1 ),
          j2 = new Jugador( objetodenombres.jugador2 ),
          j3 = new Jugador( objetodenombres.jugador3 ),
          j4 = new Jugador( objetodenombres.jugador4 );
    this.squad = [j1,j2,j3,j4];
    //this.setStorage( this.squad );
  }

  /*
  setStorage( squad:any ){
    JSON.stringify( squad );
    localStorage.setItem('squad',squad)
  }
  */




}
