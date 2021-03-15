import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntos'
})
export class PuntosPipe implements PipeTransform {

  transform(value:number): string {
    let caso:string = ""
    if (value >= 1){
      caso = `+${value}`
    } else {
      caso = `${value}`
    }
    return caso;
  }

}
