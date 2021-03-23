import { Component, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaz/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  
  jugadas:Chinaface[] = this._jh.chinaJSON;
  
  constructor( private _jh:JsonhandlerService ) {}

  ngOnInit(): void {
  }

}
