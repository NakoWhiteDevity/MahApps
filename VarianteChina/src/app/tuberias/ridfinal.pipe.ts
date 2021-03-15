import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ridfinal'
})
export class RidfinalPipe implements PipeTransform {

  transform(value:string): string {
    return `${value}R`;
  }

}
