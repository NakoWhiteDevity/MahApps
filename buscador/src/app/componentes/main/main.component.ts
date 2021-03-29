import { Component, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaz/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  
  jugadas:Chinaface[] = [];
  
  constructor( private _jh:JsonhandlerService ) {
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => this.jugadas = resp );
  }

  //Funciones transformadoras:
  tiposprint(arraydetipos:number[]){
    let arraytraducido:string[] = []
    arraydetipos.forEach(tipo => {
      switch(tipo){
        case 1: arraytraducido.push("chi") ; break ;
        case 2: arraytraducido.push("pong") ; break ;
        case 3: arraytraducido.push("kong") ; break ;
        case 4: arraytraducido.push("ponkon") ; break ;
        case 5: arraytraducido.push("accion") ; break ;
        case 6: arraytraducido.push("filtro") ; break ;
        case 7: arraytraducido.push("manoculta") ; break ;
        case 8: arraytraducido.push("familias") ; break ;
        case 9: arraytraducido.push("simples") ; break ;
        case 10: arraytraducido.push("terminales") ; break ;
        case 11: arraytraducido.push("honores") ; break ;
        case 12: arraytraducido.push("vientos") ; break ;
        case 13: arraytraducido.push("dragones") ; break ;
      }
    });
    return arraytraducido;
  }

  packsprint(packs:number,pareja:boolean){
   const parejastring = (pareja:boolean) => { if (pareja == true){ return "P" } else { return "" } };
   const packisnull = (packs:number) => { if (packs == 0){ return "" } else { return packs } } ;
   let arraydevolver:string = "";
   arraydevolver = arraydevolver.concat(`${packisnull(packs)}`);
   arraydevolver = arraydevolver.concat(`${parejastring(pareja)}`);
   return arraydevolver;
  };

  descprint(descstring:string){
    return descstring;
  }
  

  ngOnInit(): void {}

  /*
  
  */

}
