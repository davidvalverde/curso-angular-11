import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  listadoPaises: Pais[] = [];
  id: number;
  nombre: string;
  imagen: string;
  poblacion: number;
  url: string;

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {this.listadoPaises = this.paisesService.obtenerTodos();}

  ordenaPaises() {
    this.listadoPaises = this.paisesService.obtenerOrdenadosPorID();
  }

  onChange($event) {
    this.listadoPaises = this.paisesService.obtenerPorPoblacion($event.target.value);
  }

  toggleInformation(id:number){
    this.paisesService.obtenerInfoPorID(id);
  }

  anadirPais(event){
    let nuevoPais: Pais = event as Pais;
    this.paisesService.anadirPais(nuevoPais);
  }

}