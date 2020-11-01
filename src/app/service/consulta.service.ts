import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  baseUrl = 'http://localhost:3001';
  constructor(
    private http: HttpClient
    ) { }

  postData(data, url) {
    return this.http.post(`${this.baseUrl}/${url}`, data).pipe(
      map(response => response),
    );
  }

  editData(data, url) {
    return this.http.put(`${this.baseUrl}/${url}`, data).pipe(
      map(response => response),
    );
  }

  getUnique(id, url) {
    return this.http.get(`${this.baseUrl}/${url}/${id}`).pipe(
      map(response => response),
    );
  }

  getAll(url) {
    return this.http.get(`${this.baseUrl}/${url}`).pipe(
      map(response => response),
    );
  }

  deleteItem(data, url) {
    return this.http.delete(`${this.baseUrl}/${url}`, { params: {id: data._id}}).pipe(
      map(response => response),
    );
  }
}
