import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Client } from 'src/app/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  clientsList: Client[];
  token: any;

  getClients(): Observable<any> {
    const url = 'http://80.211.57.191/api/clients';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    })
    return this.http.get(url, { headers: headers });
  }
}
