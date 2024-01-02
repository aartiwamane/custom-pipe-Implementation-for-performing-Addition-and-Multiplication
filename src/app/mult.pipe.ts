import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult',
  standalone: true
})
export class MultPipe implements PipeTransform 
{

  transform(value: number,value1: number): number 
  {
    return value*value1;
  }

}
