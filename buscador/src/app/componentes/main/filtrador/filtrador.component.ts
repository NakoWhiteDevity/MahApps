import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtrador',
  templateUrl: './filtrador.component.html'
})
export class FiltradorComponent implements OnInit {

  checkboxes : FormGroup;
  arraybotones:any[] = [[1,"chi"],[2,"pong"],[3,"kong"],[4,"pong/kong"],[5,"acción"],[6,"filtro"],[7,"mano oculta"]];
  
  constructor( private _fb:FormBuilder ) {
    this.checkboxes = this._fb.group({
      
    });
  }

  ngOnInit(): void {
  }

  loquefuere(){

  }

}
