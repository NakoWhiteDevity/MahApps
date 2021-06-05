import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtrador',
  templateUrl: './filtrador.component.html'
})
export class FiltradorComponent implements OnInit {

  checkboxes : FormGroup;
  arraybotones:any[] = [[1,"chi"],[2,"pong"],[3,"kong"],[4,"pong/kong"],[5,"acción"],[6,"filtro"],[7,"mano oculta"],[8,"familias"],[9,"simples"],[10,"terminales"],[11,"honores"],[12,"vientos"],[13,"terminales"]];

  @Output() arrayhijo: EventEmitter<any>;
  
  constructor( private _fb:FormBuilder ) {
    this.checkboxes = this._fb.group({
      1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false,10:false,11:false,12:false,13:false
    });
    this.arrayhijo = new EventEmitter();
  }

  ngOnInit(): void {
  }

  submit(opcion:number){
    switch(opcion){
      case 1 : this.arrayhijo.emit(this.checkboxes.value) ; break ;
      case 2 : this.checkboxes.reset() ; this.arrayhijo.emit("nuke") ; break ;
    }
  }

}
