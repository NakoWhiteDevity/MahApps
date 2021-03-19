import { Component, OnInit } from '@angular/core';
import { ManosplusService } from 'src/app/servicios/manosplus.service';
import { NumemanoService } from 'src/app/servicios/numemano.service';

@Component({
  selector: 'app-manosplus',
  templateUrl: './manosplus.component.html'
})
export class ManosplusComponent implements OnInit{
  
  manosplus:string[] = this._mp.getplus();
  
  constructor( private _mp:ManosplusService, private _nm:NumemanoService ) {}
  
  ngOnInit(): void {
    this.manosplus = this._mp.getplus();
    console.log(this.manosplus);
  }
  
}
