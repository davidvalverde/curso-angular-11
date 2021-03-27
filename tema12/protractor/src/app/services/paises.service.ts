import { Injectable } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  PAISES = [
    new Pais(3, 'Argentina', 'arg.png',
             43131966, 'https://es.wikipedia.org/wiki/Argentina',),
    new Pais(2, 'Bélgica', 'bel.png',
             11250659, 'https://es.wikipedia.org/wiki/B%C3%A9lgica',),
    new Pais(1, 'España', 'esp.png', 
             6524949, 'https://es.wikipedia.org/wiki/Espa%C3%B1a', ),
    new Pais(4, 'Suazilandia', 'sua.png',
             1018449, 'https://es.wikipedia.org/wiki/Suazilandia',),
  ];

  constructor() { }

  obtenerTodos(): Pais[] {
    return this.PAISES;
  }

  obtenerPorPoblacion(poblacion: number): Pais[] {
    return this.PAISES.filter(elemento => elemento.poblacion > poblacion);
  }

   obtenerOrdenadosPorID(): Pais[] {
    return this.PAISES.sort((n1, n2) => n1.id - n2.id);
  }
  obtenerInfoPorID(id:number){
    let pais:Pais = this.PAISES.find(elemento => elemento.id == id);
    pais.mostrarInfo = !pais.mostrarInfo;
  }

  anadirPais(pais: Pais){
    pais.id =this.PAISES.length+1;
    this.PAISES.push(pais);
  }
}