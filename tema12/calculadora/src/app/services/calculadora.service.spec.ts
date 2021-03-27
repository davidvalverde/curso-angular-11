import { CalculadoraService } from './calculadora.service';
import { TestBed } from '@angular/core/testing';

describe('CalculadoraService', () => {
  let num1: number;
  let num2: number;
  let calculadora: CalculadoraService;

  beforeEach(() => {
    num1 = 4;
    num2 = 2;
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    calculadora = TestBed.get(CalculadoraService);
  });

  afterEach(() => {
    num1 = null;
    num2 = null;    
    calculadora = null;
  });

  it('Vamos a probar la función de suma', () => {
    expect(calculadora.sumar(num1, num2)).toBe(num1 + num2);
  });
  
  it('Vamos a probar la función de resta', () => {
    expect(calculadora.restar(num1, num2)).toBe(num1 - num2);
  });
  
  it('Vamos a probar la función de multiplicación', () => {
    expect(calculadora.multiplicar(num1, num2)).toBe(num1 * num2);
  });
  
  it('Vamos a probar la función de división', () => {
    expect(calculadora.dividir(num1, num2)).toBe(num1 / num2);
  });
});