import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  expURL= 'http://localhost:8080/skills';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
     return this.httpClient.get<Skill[]>(this.expURL + '/lista');
  }
  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.expURL + `/detail/${id}`)
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/create', skill);
  }

  public update(id: number, skills: Skill): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/update/${id}`, skills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.expURL + `/delete/${id}`);
  }
}


