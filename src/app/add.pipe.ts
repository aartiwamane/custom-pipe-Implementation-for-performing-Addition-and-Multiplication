import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add',
  standalone: true
})
export class AddPipe implements PipeTransform 
{

  transform(value: number, value1:number): number 
  {
    return value+value1;
  }

}
