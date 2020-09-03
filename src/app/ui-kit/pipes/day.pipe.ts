import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: number): string {
    return value > 1 ? value + 'Days' : value + 'Day';
  }

}
