import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  colors = {
    primary: '#222E72',
    'dusty-gray': '#999999',
    warning: '#DECA5B',
    danger: '#E7ABAB',
    'mine-shaft': '#333333',
    success: '#8BD6C1',
    'white-lilac': '#F7F8FC',
  };

  transform(value: string): string {
    return this.colors[value] || value;
  }
}
