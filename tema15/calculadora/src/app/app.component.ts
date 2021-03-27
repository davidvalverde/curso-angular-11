import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tests';
  num1: number;
  num2: number;

  numbers = [];
  result: number;
  
  addNumber(num: any, id: number) {

    this.numbers[id] = num;
  }
  getResultado(numeros: number) {
    console.log(numeros);
    this.result = numeros;
  }
  public borrar() { this.result = 0; this.numbers = []; 
                   	this.num1 = 0; this.num2 = 0;}
}


