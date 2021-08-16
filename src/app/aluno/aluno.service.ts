import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // api RestFul JAVA
  baseUrl = 'http://localhost:8080/sistema-academico/alunos'; 

  constructor(private _snackBar: MatSnackBar, 
    private httpClient: HttpClient) { }

    openSnackBar(message: string) {
      this._snackBar.open(message, 'X', {
        duration: 2000,
        verticalPosition: "top",
        horizontalPosition: "right"
      });
    }
    getAluno(id: number): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}/${id}`);
    }
    createAluno(aluno: Object): Observable<Object> {
      return this.httpClient.post(`${this.baseUrl}`, aluno);
    }
    updateAluno(id: number, value: any): Observable<Object> {
      return this.httpClient.put(`${this.baseUrl}/${id}`, value);
    }
    deleteAluno(id: number): Observable<any> {
      return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
    getAlunoList(): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}`);
    }

}
