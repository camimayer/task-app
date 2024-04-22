import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://127.0.0.1:5000/v1/tasks';
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  create(description: string, assignedToUid: string): Observable<any> {

    const headers = new HttpHeaders({
      'x-access-token': this.token || ''
    });

    const options = { headers: headers };

    return this.http.post<any>(`${this.apiUrl}/`, { description, assignedToUid }, options);
  }

  getCreatedBy(): Observable<any> {

    const headers = new HttpHeaders({
      'x-access-token': this.token || ''
    });

    const options = { headers: headers };

    return this.http.get<any>(`${this.apiUrl}/createdby/`, options);
  }

  getAssignedTo(): Observable<any> {

    const headers = new HttpHeaders({
      'x-access-token': this.token || ''
    });

    const options = { headers: headers };

    return this.http.get<any>(`${this.apiUrl}/assignedto/`, options);
  }

}
