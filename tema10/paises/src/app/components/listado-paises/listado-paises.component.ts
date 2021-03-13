import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {
  paises: Pais[];
  mensaje: string = "Este mensaje es un texto de ejemplo para utilizar el pipe que permite acortar un texto.";
  
  constructor(private paisesService: PaisesService) { }

  ngOnInit() { this.paises = this.paisesService.obtenerTodos(); }

  ordenaPaises() {
    this.paises = this.paisesService.obtenerOrdenadosPorID();
  }

  onChange($event) {
    this.paises = this.paisesService.obtenerPorPoblacion($event.target.value);
  }

  mostrarOcultarInfo(id: number) {
    this.paises.filter(elemento => elemento.id === id).forEach(
      function(pais) {
        pais.mostrarInfo = !pais.mostrarInfo;
      }
    )
  }

  anadirPais(event) {
    let nuevoPais: Pais = event as Pais;  
    this.paisesService.anadirPais(nuevoPais);
  }
}