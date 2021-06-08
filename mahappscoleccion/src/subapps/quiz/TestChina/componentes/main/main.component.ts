import { Component, OnInit } from '@angular/core';

//Linea para importar el módulo de underscore. Tutorial en el commit:
import * as _ from 'underscore';
import { TestrastestService } from '../../servicios/testrastest.service';
import { CorrectorService } from '../../servicios/corrector.service';
import { iteface } from '../../interfaces/chinaface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  //82 jugadas.

  iterado:iteface = this._tat.iterador(this._tat.indice[0]);
  randomain:number = this._tat.random[0];
  
  constructor( public _tat:TestrastestService , public _c:CorrectorService ){
    this._tat.obsjugada$.subscribe(resp => this.iterado = resp);
    this._tat.obsrandom$.subscribe(resp => this.randomain = resp);
  }

  ngOnInit(): void {}

}
