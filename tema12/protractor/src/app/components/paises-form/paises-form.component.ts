import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-paises-form',
  templateUrl: './paises-form.component.html',
  styleUrls: ['./paises-form.component.css']
})
export class PaisesFormComponent implements OnInit {
  @Output("nuevoPais") modelEmitter;
  model: Pais;
  submitted: boolean;

  constructor() {
    this.modelEmitter = new EventEmitter();
    this.model = new Pais(0, "", "", 0, "");
    this.submitted = false;
  }
  
  ngOnInit() { }
  
  onSubmit() {
    this.submitted = true;
    this.modelEmitter.emit(this.model);
    this.model = new Pais(0, "", "", 0, "");
  }
}
