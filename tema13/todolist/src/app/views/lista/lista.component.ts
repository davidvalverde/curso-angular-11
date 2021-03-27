import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  mensaje: string = "";
  fecha: Date = new Date();
  gradoImportancia: number = 0;

  tareas: Todo[] = [];
  tareasCompletadas: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  crearTarea() {
    this.tareas.push(new Todo(this.mensaje, this.fecha, this.gradoImportancia, false));
  }

  finalizarTarea(tarea: Todo, position: number) {
    this.tareas.splice(position, 1);
    this.tareasCompletadas.push(tarea);
  }

  ponerPendiente(tarea: Todo, position: number) {
    this.tareasCompletadas.splice(position, 1);
    this.tareas.push(tarea);
  }

}
