import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExamenesService {
  _url = 'http://localhost:8080/examenes'
  postId;
  constructor(private http: HttpClient) {
    console.log('Servicio Examenes');
  }
  getExamenes() {
    let header = new HttpHeaders()
    //      .set('Type-content','aplication/json')
    return this.http.get(this._url, {
      //      headers: header
    });
  }
  insertExamenes(body: any) {
    return this.http.post<any>(this._url, body, {
      
    })
  }
}
