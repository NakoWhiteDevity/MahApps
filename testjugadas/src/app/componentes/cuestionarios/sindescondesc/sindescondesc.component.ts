import { Component, Input, OnInit } from '@angular/core';
import { Chinaface, nofanchinaface } from 'src/app/interfaces/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sindescondesc',
  templateUrl: './sindescondesc.component.html'
})
export class SindescondescComponent implements OnInit {

  @Input() jugadasReadonlyChild!:Chinaface;
  jugadascopia = this.jugadascopiasinfan(this._jh.jugadas);
  
  constructor( private _jh:JsonhandlerService ) { }

  ngOnInit(): void {}

  descaso(jugada:Chinaface):number{
    let caso!:number;
    if (jugada.detalles !== ""){caso = 2;}
    if (jugada.detallesHTML){caso = 3;}
    return caso;
  }

  jugadascopiasinfan(jugadas:Chinaface[]):Chinaface[]{
    let caso:Chinaface[] = [];
    this._jh.jugadas.forEach(jugada => {
      if(jugada.detalles !== ""){ caso.push(jugada) };
    });
    return caso
  }

  barajafanes(jugada:Chinaface):string[]{
    
    //Funcionamiento
    const objrespuesta = ():nofanchinaface => {
      return {
        posarray : this.jugadascopia.indexOf(jugada),
        jugada : jugada
      }
    }

    const crearbaraja = (objres:nofanchinaface):string[] => {

      const adyacentes = (posarray:number):Chinaface[] => {
        let caso!:Chinaface[];
        switch (posarray){
          case 0 : case 1 : caso = [this.jugadascopia[0],this.jugadascopia[1],this.jugadascopia[2]] ; break ;
          case 71 : case 70 : caso = [this.jugadascopia[71],this.jugadascopia[70],this.jugadascopia[69]] ; break ;
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
        return this.jugadascopia[0];
      }

      const construirbaraja = (adyacientes:Chinaface[],discordancia:Chinaface):string[] => {
        
        let baraja:string[] = [];
        
        const tipodesc = (jugada:Chinaface):string => {
          let caso!:string;
          if (jugada.detalles){ caso = jugada.detalles };
          if (jugada.detallesHTML){ caso = jugada.detallesHTML };
          return caso;
        }

        adyacientes.forEach(elemento => {
          baraja.push(tipodesc(elemento));
        });
        baraja.push(tipodesc(discordancia));
        
        baraja = _.shuffle(baraja) ; return baraja;

      }

      let ady = adyacentes(objrespuesta().posarray);
      let dis = discordante(ady);
      return construirbaraja(ady,dis);

    }

    //Ejecución
    return crearbaraja(objrespuesta());

  }

}
