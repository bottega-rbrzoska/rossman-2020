import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: number, multiplier: number): number {
    console.log('multiplied value: ' + value * multiplier);
    return value * multiplier;
  }

}
