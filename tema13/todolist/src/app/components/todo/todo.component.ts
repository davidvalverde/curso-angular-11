import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { trigger, state, style,
        animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('animaciones', [
      state('inactive', style({
        transform: 'translateX(-2000px)'
      })),
      state('active', style({
        transform: 'translateX(0px)'
      })),
      state('deleted', style({
        opacity: 0,
        transform: 'scale(.01)'
      })),
      transition('inactive => active, active => deleted', animate('1000ms ease-in'))
    ]),
  ]
})
export class TodoComponent implements OnInit {

  @Input() tarea: Todo = new Todo("", new Date(), 0, false);

  @Output() tareaCompletada = new EventEmitter<Todo>();

  mensajeBoton: string = "Completar";
  state = 'inactive';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.state = 'active'; }, 2000);

    if (this.tarea.completada) {
      this.mensajeBoton = "Poner pendiente";
    }
  }

  completar() { 
    this.state = 'deleted';
  }

  completarCallback() {
    this.tarea.completar(); 
    if (this.tarea.completada) {
      this.mensajeBoton = "Poner pendiente";
    }
    this.tareaCompletada.emit(this.tarea);
  }

  onAnimationEvent( event: AnimationEvent ) {
    if (event.toState === 'deleted') {
      this.completarCallback();
    }
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
