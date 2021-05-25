import { Component, OnInit } from '@angular/core';
import { Chinaface, nofanchinaface } from 'src/app/interfaces/chinaface';
import { CorrectorService } from 'src/app/servicios/corrector.service';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import * as _ from 'underscore';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sindescondesc',
  templateUrl: './sindescondesc.component.html'
})
export class SindescondescComponent implements OnInit {

  //Condicion : que el random del observable sea 2.
  
  jugada:Chinaface = this._tat.aiterar.jugada;
  baraja!:string[];
  
  constructor( private _jh:JsonhandlerService , public _c:CorrectorService , private _tat : TestrastestService ){
    let random!:number;
    this._tat.obsrandom$.subscribe(resp => random = resp);
    this._tat.obsjugada$.pipe(
      filter( resp => random == 2 )
    ).subscribe(resp => this.jugada = resp.jugada)
  }



  ngOnInit(): void {}

  jugadascopiasinfan():Chinaface[]{
    let caso:Chinaface[] = [];
    this._jh.jugadas.forEach(jugada => {
      if(jugada.detalles !== ""){ caso.push(jugada) };
    });
    return caso
  }

  barajafanes():string[]{

    const tipodesc = (jugada:Chinaface):string => {
      let caso!:string;
      if (jugada.detalles){ caso = jugada.detalles };
      if (jugada.detallesHTML){ caso = jugada.detallesHTML };
      return caso;
    }
    
    const construirbaraja = (jugadapreguntada:Chinaface):string[] => {
      const jugadascopia = _.shuffle(this.jugadascopiasinfan());
      let indice:number = jugadascopia.indexOf(jugadapreguntada);
      jugadascopia.splice(indice,1);
      let baraja:string[] = [tipodesc(jugadapreguntada),tipodesc(jugadascopia[0]),tipodesc(jugadascopia[1]),tipodesc(jugadascopia[2])] ; baraja = _.shuffle(baraja);
      return baraja;
    }

    return construirbaraja(this.jugada);
  
  }

}
