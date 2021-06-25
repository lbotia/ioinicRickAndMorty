import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    if(texto === ''){
      return  arreglo;
    }
    texto = texto.toLowerCase();

    return arreglo.filter(item => item.name.toLowerCase().includes(texto));
  }

}
