import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const animales = [{ id: 1, nombre: 'Perro' },
      { id: 2, nombre: 'Gato' },
      { id: 3, nombre: 'León' },
      { id: 4, nombre: 'Elefante' },
      { id: 5, nombre: 'Jirafa' },
      { id: 6, nombre: 'Águila' },
      { id: 7, nombre: 'Tigre' },
      { id: 8, nombre: 'Ciervo' },
      { id: 9, nombre: 'Lince' },
      { id: 10, nombre: 'Rata' }];
    return {animales};
  }
}
