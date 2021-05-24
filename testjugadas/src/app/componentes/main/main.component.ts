import { Component, OnInit } from '@angular/core';

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
  
  constructor( public _tat:TestrastestService , public _c:CorrectorService ) {}

  ngOnInit(): void {
    console.log("Esto solo se arranca una ves.");
    this._tat.obsjugada$.next(this._tat.iterador(this._tat.indice[0]));
    this._tat.obsrandom$.next(this._tat.random[0]);
  }

}
