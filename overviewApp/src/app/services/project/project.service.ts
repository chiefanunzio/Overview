import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  token:''
  constructor(private http: HttpClient) { }

  
  postLogIn(body:any): Observable<any> {

    let url = 'http://80.211.57.191/api/login'
   
    return this.http.post(url,body)
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
