import { Component, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import { CorrectorService } from 'src/app/servicios/corrector.service';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sinfan',
  templateUrl: './sinfan.component.html'
})
export class SinfanComponent implements OnInit {

  jugada:Chinaface = this._tat.aiterar.jugada;
  jugadascopia = this.jugadascopiassinfan(this._jh.jugadas);
  baraja:string[] = this.barajafanes();
  descripcion:string = this.tipodesc();
  
  constructor( private _jh:JsonhandlerService , public _c:CorrectorService , private _tat:TestrastestService ) { }

  jugadascopiassinfan(jugadas:Chinaface[]):Chinaface[]{
    let caso:Chinaface[] = [];
    this._jh.jugadas.forEach( jugada => {
      if(jugada.detalles !== ""){ caso.push(jugada) }
    });
    return caso;
  }

  tipodesc():string{
    let jugada:Chinaface = this.jugada;
    let caso!:string;
    if (jugada.detalles){ caso = jugada.detalles };
    if (jugada.detallesHTML){ caso = jugada.detallesHTML };
    return caso;
  }
  
  ngOnInit(): void {
  }

  barajafanes():string[]{

    const construirbaraja = (jugadapreguntada:Chinaface):string[] => {
      
      this.jugadascopia = _.shuffle(this.jugadascopia);
      let indice:number = this.jugadascopia.indexOf(jugadapreguntada);
      this.jugadascopia.splice(indice,1);
      let baraja:string[] = [jugadapreguntada.nombre,this.jugadascopia[0].nombre,this.jugadascopia[1].nombre,this.jugadascopia[2].nombre] ; baraja = _.shuffle(baraja);
      return baraja;

    }

    //Ejecucion:
    return construirbaraja(this.jugada);

  }

  

}
