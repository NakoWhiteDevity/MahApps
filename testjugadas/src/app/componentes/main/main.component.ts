import { Component, OnInit } from '@angular/core';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { Chinaface, iteface } from 'src/app/interfaces/chinaface';

//Linea para importar el módulo de underscore. Tutorial en el commit:
import * as _ from 'underscore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  //82 jugadas.
  indice:number[] = this.crearindice();
  
  constructor( private _jh:JsonhandlerService ) {}

  crearindice():number[]{
    let indice:number[] = [];
    for(let n = 1 ; n <= 82 ; n++){
      indice.push(n);
    }
    indice = _.shuffle(indice);
    return indice;
  }

  ngOnInit(): void {}

  pasarsiguiente(){
    this.indice.shift();
    if (this.indice.length == 22){
      this.indice = this.crearindice();
    }
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
    return _.random(1,2);
  }


}
