import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-paises-reactive-form',
  templateUrl: './paises-reactive-form.component.html',
  styleUrls: ['./paises-reactive-form.component.css']
})
export class PaisesReactiveFormComponent implements OnInit {
  @Output("nuevoPais") modelEmitter;
  submitted: boolean;

  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.modelEmitter = new EventEmitter();
    this.submitted = false;
  }

  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      poblacion: ['', Validators.required],
      url: ''
    });
  }

  enviarFormulario (values: any) {
    this.submitted = true;
    this.modelEmitter.emit(new Pais(0, values.nombre, "assets/des.png", values.poblacion, values.url, "", "", false));
    this.formularioRegistro.reset();
  }

}
