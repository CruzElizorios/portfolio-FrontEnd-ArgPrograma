import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SobremiModel } from '../models/sobremi.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  sobreURl = 'http://localhost:8080/sobremi/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<SobremiModel[]>{
    return this.httpClient.get<SobremiModel[]>(this.sobreURl + 'lista');
  }

  public infoSobremi(id: number): Observable<SobremiModel>{
    return this.httpClient.get<SobremiModel>(this.sobreURl + `infoSobremi/${id}`);
  }

  public crear(sobremi: SobremiModel): Observable<any>{
    return this.httpClient.post<any>(this.sobreURl + 'crear', sobremi);
  }

  public actualizar(id: number, sobremi: SobremiModel): Observable<any>{
    return this.httpClient.put<any>(this.sobreURl + `actualizar/${id}`, sobremi);
  }

  public borrar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.sobreURl + `eliminar/${id}`);
  }

}
