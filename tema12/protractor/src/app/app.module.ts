import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { PaisesFormComponent } from './components/paises-form/paises-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPaisesComponent,
    PaisesFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
