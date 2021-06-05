import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posicion'
})
export class PosicionPipe implements PipeTransform {

  transform(value:number): string {
    let caso:string = "";
    switch(value){
      case 0 : { caso = "primero" ; break ; }
      case 1 : { caso = "segundo" ; break ; }
      case 2 : { caso = "tercero" ; break ; }
      case 3 : { caso = "cuarto" ; break ; }
    }
    return caso;
  }

}
