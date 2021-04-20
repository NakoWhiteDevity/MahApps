import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Chinaface, nofanchinaface } from 'src/app/interfaces/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sinfan',
  templateUrl: './sinfan.component.html'
})
export class SinfanComponent implements OnInit {

  @Input() jugadasReadonlyChild!:Chinaface;
  jugadascopia = this._jh.jugadas;
  
  constructor( private _jh:JsonhandlerService ) { }

  ngOnInit(): void {}

  descaso(jugada:Chinaface):number{
    let caso!:number;
    if (jugada.detalles !== ""){caso = 2;}
    if (jugada.detallesHTML){caso = 3;}
    return caso;
  }

  barajafanes(jugada:Chinaface):Chinaface[]{
    
    //Funcionamiento
    const objrespuesta = ():nofanchinaface => {
      return {
        posarray : this.jugadascopia.indexOf(jugada),
        jugada : jugada
      }
    }

    const crearbaraja = (objres:nofanchinaface):Chinaface[] => {

      const adyacentes = (posarray:number):Chinaface[] => {
        let caso!:Chinaface[];
        switch (posarray){
          case 0 : case 1 : caso = [this.jugadascopia[0],this.jugadascopia[1],this.jugadascopia[2]] ; break ;
          case 81 : case 80 : caso = [this.jugadascopia[81],this.jugadascopia[80],this.jugadascopia[79]] ; break ;
          default : caso = [this.jugadascopia[posarray - 1],this.jugadascopia[posarray],this.jugadascopia[posarray + 1]] ; break ;
        }
        return caso;
      }

      const discordante = (arrayadyacentes:Chinaface[]):Chinaface => {
        arrayadyacentes.forEach( resadyacentes => {
          let indice:number = this.jugadascopia.indexOf(resadyacentes);
          this.jugadascopia.splice(indice,1);
        });
        this.jugadascopia = _.shuffle(this.jugadascopia);
        console.log("funcion discordante:",this.jugadascopia[0]);
        return this.jugadascopia[0];
      }

      const construirbaraja = (adyacientes:Chinaface[],discordancia:Chinaface):string[] => {
        let baraja:Chinaface[] = [];
        adyacientes.forEach(elemento => {
          baraja.push(elemento);
        });
        adyacientes.push(discordancia);
        baraja = _.shuffle(baraja) ; return baraja;
      }

      let ady:Chinaface[] = adyacentes(objrespuesta().posarray);
      let dis:Chinaface = discordante(ady);
      return construirbaraja(ady,dis);

    }

    //Ejecución
    return crearbaraja(objrespuesta());

  }

}
