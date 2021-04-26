import { Component, OnInit } from '@angular/core';

//Linea para importar el módulo de underscore. Tutorial en el commit:
import * as _ from 'underscore';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import { iteface } from 'src/app/interfaces/chinaface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  //82 jugadas.
  
  iterable:iteface = this._tat.aiterar;
  random:number = this._tat.random[0];
  
  constructor( private _tat:TestrastestService ) {}

  ngOnInit(): void {}

}
