import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  // api RestFul JAVA
  baseUrl = 'http://localhost:8080/sistema-academico/cursos'; 
  
  constructor(private _snackBar: MatSnackBar, 
              private httpClient: HttpClient) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }
  getCurso(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  createCurso(curso: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, curso);
  }
  updateCurso(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
  deleteCurso(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getCursoList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }
}
