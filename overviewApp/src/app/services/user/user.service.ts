import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }
  
  token:any

    url = `http://80.211.57.191/api/users` 
    
    
    getUsers():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(this.url,{headers: headers});
  }

  postLogIn(body:any): Observable<any> {

    let url = 'http://80.211.57.191/api/login'

    return this.http.post(url,body)
  }
}
