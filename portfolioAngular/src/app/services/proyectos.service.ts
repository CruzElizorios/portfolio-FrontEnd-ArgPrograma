import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosModel } from '../models/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'http://localhost:8080/proyectos/';
  //URL = 'https://backendicruz.onrender.com/proyectos/';
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<ProyectosModel[]>{
    return this.httpClient.get<ProyectosModel[]>(this.URL + 'lista');
  }

  public infoProyectos(id: number): Observable<ProyectosModel>{
    return this.httpClient.get<ProyectosModel>(this.URL + `infoProyectos/${id}`);
  }

  public guardar(proyectos: ProyectosModel): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', proyectos);
  }

  public actualizar(id: number, proyectos: ProyectosModel): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, proyectos);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }
}
