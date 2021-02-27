import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() tarea: Todo = new Todo("", new Date(), 0, false);

  @Output() tareaCompletada = new EventEmitter<Todo>();

  mensajeBoton: string = "Completar";

  constructor() { }

  ngOnInit(): void {
    if (this.tarea.completada) {
      this.mensajeBoton = "Poner pendiente";
    }
  }

  completar() { 
    this.tarea.completar(); 
    if (this.tarea.completada) {
      this.mensajeBoton = "Poner pendiente";
    }
    this.tareaCompletada.emit(this.tarea);
  }

  getColor() {
    switch (this.tarea.gradoImportancia) {
      case 1: return "#EF4816";
      case 2: return "#EA631F";
      case 3: return "#EEAE38";
      default: return "#57B9B0";
    }
  }
}
