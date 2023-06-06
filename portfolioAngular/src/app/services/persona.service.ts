import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';
  //URL = 'https://backendicruz.onrender.com/personas/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detalles(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detalles/${id}`);
  }

  
  public actualizar(id: number, pers: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, pers);
  }
  
  // public guardar(experiencia: persona): Observable<any>{
  //   return this.httpClient.post<any>(this.URL + 'crear', experiencia);
  // }
  // public borrar(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  // }
}
