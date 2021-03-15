import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viento'
})
export class VientoPipe implements PipeTransform {

  transform(value:string): string {
    let caso:string = "";
    switch(value){
      case "E" : { caso = "este" ; break ; }
      case "S" : { caso = "sur" ; break ; }
      case "W" : { caso = "oeste" ; break ; }
      case "N" : { caso = "norte" ; break ; }
    }
    return caso;
  }

}
