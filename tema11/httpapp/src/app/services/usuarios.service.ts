import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosUrl = 'https://randomuser.me/api/?results=10'; 

  constructor() { }

  getUsuarios(): Promise<any> {
    return axios.get(this.usuariosUrl)
        .then(response => {
          response = response.data.results;
          console.log(response);
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}
