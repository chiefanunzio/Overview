import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  token:any
  newProj:Project
  constructor(private http: HttpClient) {
    
    this.token = localStorage.getItem('token')
   }


  getProject(): Observable<any> {
    let url = 'http://80.211.57.191/api/projects' ;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }
    return this.http.get(url,{headers})
  }

  addProject(){
    let url = 'http://80.211.57.191/api/projects';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }
    return this.http.post(url,this.newProj,{headers})

  }

    
}
