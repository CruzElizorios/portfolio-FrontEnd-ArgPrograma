import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionModel } from '../models/educacion-model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  expURl = 'http://localhost:8080/educacion/';
  //expURl = 'https://backendicruz.onrender.com/educacion/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<EducacionModel[]>{
    return this.httpClient.get<EducacionModel[]>(this.expURl + 'lista');
  }

  public infoEdu(id: number): Observable<EducacionModel>{
    return this.httpClient.get<EducacionModel>(this.expURl + `infoEdu/${id}`);
  }

  public guardar(educacion: EducacionModel): Observable<any>{
    return this.httpClient.post<any>(this.expURl + 'crear', educacion);
  }

  public actualizar(id: number, educacion: EducacionModel): Observable<any>{
    return this.httpClient.put<any>(this.expURl + `actualizar/${id}`, educacion);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURl + `eliminar/${id}`);
  }
}
