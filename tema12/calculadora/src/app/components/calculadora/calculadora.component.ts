import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  num1: number;
  num2: number;
  resultado: number;

  constructor(private calculadora: CalculadoraService) { }

  ngOnInit() { }

  /** resultado = num1 + num2 */
  public sumar() { this.resultado = this.calculadora.sumar(this.num1, this.num2); }
   /** resultado = num1 - num2 */
  public restar() { this.resultado = this.calculadora.restar(this.num1, this.num2); }
   /** resultado = num1 * num2 */
  public multiplicar() { this.resultado = this.calculadora.multiplicar(this.num1, this.num2); }
   /** resultado = num1 / num2 */
  public dividir() { this.resultado = this.calculadora.dividir(this.num1, this.num2); }
 /** resultado , num1 y num2 = 0 */
  public borrar() { this.resultado = 0; this.num1 = 0; this.num2 = 0; }
}
