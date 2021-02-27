import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  listadoEmpleados: Empleado[] = [];

  nombre: string = "";
  apellidos: string = "";
  departamento: string = "";
  mostrarForm: boolean = false;

  constructor() {
    this.listadoEmpleados = [
      new Empleado('Mario', 'Girón', 'Formación'),
      new Empleado('Antonio', 'López', 'Formación'),
      new Empleado('Raul', 'García', 'Contabilidad'),
      new Empleado('María', 'García', 'Formación')
    ];
  }

  ngOnInit(): void {
  }

  crearNuevoEmpleado(){
    let empleado = new Empleado(this.nombre,
                                this.apellidos, this.departamento);
    this.listadoEmpleados.push(empleado)
  }

  toggleMostrar() {
    this.mostrarForm = !this.mostrarForm;
  }

}
