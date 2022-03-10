import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  token:any
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
}
