import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';
import { ListaComponent } from './components/lista/lista.component';
import { PaisesFormComponent } from './components/paises-form/paises-form.component';
import { PaisesReactiveFormComponent } from './components/paises-reactive-form/paises-reactive-form.component';
import { PaisPorNombrePipe } from './pais-por-nombre.pipe';
import { ExcerptPipe } from './excerpt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPaisesComponent,
    ListaComponent,
    PaisesFormComponent,
    PaisesReactiveFormComponent,
    PaisPorNombrePipe,
    ExcerptPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
