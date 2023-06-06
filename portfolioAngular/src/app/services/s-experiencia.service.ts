import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrabajoModel } from '../models/trabajos.model';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURl = 'http://localhost:8080/experiencia/';
  //expURl = 'https://backendicruz.onrender.com/experiencia/';
  constructor(private httpClient: HttpClient){}

  public lista(): Observable<TrabajoModel[]>{
    return this.httpClient.get<TrabajoModel[]>(this.expURl + 'lista');
  }

  public infoExp(id: number): Observable<TrabajoModel>{
    return this.httpClient.get<TrabajoModel>(this.expURl + `infoExp/${id}`);
  }

  public guardar(experiencia: TrabajoModel): Observable<any>{
    return this.httpClient.post<any>(this.expURl + 'crear', experiencia);
  }
  
  public actualizar(id: number, experiencia: TrabajoModel): Observable<any>{
    return this.httpClient.put<any>(this.expURl + `actualizar/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURl + `eliminar/${id}`);
  }
}
