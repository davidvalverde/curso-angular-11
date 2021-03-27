import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }
  /** Devolvemos num1 + num2 */
  public sumar(num1: number, num2: number): number {
    return num1 + num2;
  }
  /** Devolvemos num1 - num2 */
  public restar(num1: number, num2: number): number {
    return num1 - num2;
  }
  /** Devolvemos num1 * num2 */
  public multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }
  /** Devolvemos num1 / num2 */
  public dividir(num1: number, num2: number): number {
    return num1 / num2;
  }
}