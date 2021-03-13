import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../models/animal.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  private animalesUrl = 'api/animales';  // URL a web api

  constructor(private http: HttpClient) { }

  getAnimales(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalesUrl);
  }
  
  addAnimal(animal: Animal): Observable<Animal> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Animal>(this.animalesUrl, animal, httpOptions)
  }
}
