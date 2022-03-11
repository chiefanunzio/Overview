import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
    token= localStorage.getItem('token')
    url = `http://80.211.57.191/api/users` 
    
    
    getUsers():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(this.url,{headers: headers});
  }

  addUser(form:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
    let body = {
     "name":form.name,
     "surname":form.surname,
     "email":form.email,
     "password":form.password,
     "cost":form.cost,
     "recruitment_date":form.recruitment_date,
     "week_working_hours":form.week_working_hours,
    };
    return this.http.post(this.url, body,{headers: headers});
  }

  
}
