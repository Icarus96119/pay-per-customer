import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  colors = {
    astronaut: '#222E72',
    'dusty-gray': '#999999',
    equator: '#DECA5B',
    shilo: '#E7ABAB',
    'mine-shaft': '#333333',
    'vista-blue': '#8BD6C1',
    'white-lilac': '#F7F8FC',
  };

  transform(value: string): string {
    return this.colors[value] || value;
  }
}
