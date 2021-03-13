import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paisPorNombre'
})
export class PaisPorNombrePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filtro = args.toLocaleLowerCase();
    return filtro ? value.filter(pais =>
      pais.nombre.toLocaleLowerCase().indexOf(filtro) != -1) : value;
  }

}
