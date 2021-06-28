import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    // console.log('arreglo size -> ', arreglo.length);

    if(texto === ''){
      return  arreglo;
    }
    texto = texto.toLowerCase();

    return arreglo.filter(item => item.name.toLowerCase().includes(texto));
  }

}
