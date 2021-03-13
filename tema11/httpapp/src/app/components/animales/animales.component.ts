import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../../services/animales.service';
import { Animal } from 'src/app/models/animal.model';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  animales: Animal[] = [];
  id: number;
  nombre: string;
  constructor(private animalesService: AnimalesService) { }

  ngOnInit() { }
  
  get() {
    this.animalesService.getAnimales().subscribe(
      animales => this.animales = animales
    );
  }
  
  add() {
    let nuevoAnimal = new Animal(this.id, this.nombre);
    this.animalesService.addAnimal(nuevoAnimal).subscribe(
      animal => this.animales.push(animal)
    );

  }
}