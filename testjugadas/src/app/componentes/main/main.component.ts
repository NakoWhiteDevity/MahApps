import { Component, OnInit } from '@angular/core';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { Chinaface } from 'src/app/interfaces/chinaface';

//Linea para importar el módulo de underscore. Tutorial en el commit:
import * as _ from 'underscore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  //82 jugadas.
  jugadasReadonly:Chinaface[] = [];
  indice:number[] = this.crearindice(); 
  indicetest:number[] = this.crearindicetest();
  
  constructor( private _jh:JsonhandlerService ) {
    /*
    const copia = (jugadasJSON:Chinaface[]) => {
      this.jugadasReadonly = jugadasJSON;
    }
    */
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => this.jugadasReadonly = resp);
  }

  crearindice():number[]{
    let indice:number[] = [];
    for(let n = 1 ; n <= 82 ; n++){
      indice.push(n);
    }
    indice = _.shuffle(indice);
    return indice;
  }

  crearindicetest(){
    let indice:number[] = [];
    for(let n1 = 1 ; n1 <= 3 ; n1++){
      for(let n2 = 1 ; n2 <= 10 ; n2++){
        indice.push(n1);
      }
    }
    indice = _.shuffle(indice);
    return indice;
  }

  ngOnInit(): void {}

  iterador(index:number):Chinaface{
    return this.jugadasReadonly[index];
  }

  pasarsiguiente(){
    this.indice.shift(); this.indicetest.shift();
    if (this.indice.length == 22){
      this.indice = this.crearindice();
    }
    if (this.indicetest.length == 1){
      this.indicetest = this.crearindicetest();
    }
    //console.log(this.indice,this.indicetrash);
  }


}
