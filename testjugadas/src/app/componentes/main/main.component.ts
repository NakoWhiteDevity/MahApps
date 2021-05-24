import { Component, OnInit } from '@angular/core';

//Linea para importar el módulo de underscore. Tutorial en el commit:
import * as _ from 'underscore';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import { CorrectorService } from 'src/app/servicios/corrector.service';
import { iteface } from 'src/app/interfaces/chinaface';
import { merge } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  //82 jugadas.

  iterado:iteface = this._tat.aiterar;
  randomain:number = this._tat.randomN;
  
  constructor( public _tat:TestrastestService , public _c:CorrectorService ){
    this._tat.obsjugada$.subscribe(resp => this.iterado = resp);
    this._tat.obsrandom$.subscribe(resp => this.randomain = resp);
  }

  ngOnInit(): void {}

}
