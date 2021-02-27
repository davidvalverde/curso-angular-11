export class Pais {
    id: number;
    nombre: string;
    imagen: string;
    poblacion: number;
    url: string;
    capital: string;
    moneda: string;
    mostrarInfo: boolean
  
    constructor(id: number, nombre: string, imagen: string, 
                poblacion: number, url: string, capital: string,
                moneda: string, mostrarInfo: boolean) {
      this.id = id;
      this.nombre = nombre;
      this.imagen = imagen;
      this.poblacion = poblacion;
      this.url = url;
      this.capital = capital;
      this.moneda = moneda;
      this.mostrarInfo = mostrarInfo;
    }
  }