import { Component, OnInit } from '@angular/core';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { Chinaface, iteface } from 'src/app/interfaces/chinaface';

//Linea para importar el módulo de underscore. Tutorial en el commit:
import * as _ from 'underscore';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import { CorrectorService } from 'src/app/servicios/corrector.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  //82 jugadas.
  indice:number[] = this._tat.indice;
  
  constructor( private _jh:JsonhandlerService , private _tat:TestrastestService , public _c:CorrectorService ) {}

  ngOnInit(): void {
    console.log(this.indice);
    this._tat.pasarsiguiente();
    console.log(this.indice);
  }
  
  iterador(i:number):iteface{
    
    const haydetalles = (detalles:string):boolean =>{
      if (detalles == "") { return false } else { return true };
    }
    
    let caso = {
      jugada:this._jh.jugadas[i],
      caso: haydetalles(this._jh.jugadas[i].detalles)
    }
     
    //pasarsiguiente();
    return caso;
  }

  randomcondesc():number{
    return _.random(1,3);
  }


}
