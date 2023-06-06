import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = 'http://localhost:8080/skill/';
  //URL = 'https://backendicruz.onrender.com/skill/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + 'lista');
  }

  public infoHys(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `infoHys/${id}`);
  }

  public crear(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', skill);
  }

  public actualizar(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, skill);
  }

  public eliminar(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `eliminar/${id}`);
  }
}
