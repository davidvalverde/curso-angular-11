import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from 'src/app/services/calculadora.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('CalculadoraComponent', () => {
  let num1: number;
  let num2: number;
  let resultado: number;

  let servicio: CalculadoraService;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let componente: CalculadoraComponent;

  beforeEach(() => {
    num1 = 3; num2 = 9;
    resultado = 0;

    servicio = new CalculadoraService();
    componente = new CalculadoraComponent(servicio);
    
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [CalculadoraService],     
    });

    fixture = TestBed.createComponent(CalculadoraComponent);
    componente = fixture.componentInstance;

    servicio = TestBed.get(CalculadoraService);
  });

  afterEach(() => {
    num1 = 0; num2 = 0;
    resultado = 0;
    
    servicio = null; componente = null;
  });

  it('Comprobación del método de suma', () => {
    componente.num1 = num1; componente.num2 = num2;
    componente.sumar();
    expect(componente.resultado).toBe(num1 + num2);
  });
  
  it('Comprobación del método de resta', () => {
    componente.num1 = num1; componente.num2 = num2;
    componente.restar();
    expect(componente.resultado).toBe(num1 - num2);
  });
  
  it('Comprobación del método de multiplicación', () => {
    componente.num1 = num1; componente.num2 = num2;
    componente.multiplicar();
    expect(componente.resultado).toBe(num1 * num2);
  });
  
  it('Comprobación del método de división', () => {
    componente.num1 = num1; componente.num2 = num2;
    componente.dividir();
    expect(componente.resultado).toBe(num1 / num2);
  });

  it('Comprobación del método de borrado', () => {
    componente.borrar();
    expect(componente.num1).toBe(0);
    expect(componente.num2).toBe(0);
    expect(componente.resultado).toBe(0);
  });
});