import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sesionIniciada: boolean = false;

  constructor() { }

  actualizarSesionIniciada(value: boolean) {
    this.sesionIniciada = value;
  }

  comprobarSesionIniciada() {
    return this.sesionIniciada;
  }
}