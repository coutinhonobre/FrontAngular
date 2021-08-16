import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BackendApiService {

  // api RestFul JAVA
  baseUrl = 'http://localhost:8080/sistema-academico/'; 

  constructor(private _snackBar: MatSnackBar, 
    private httpClient: HttpClient) { }

    openSnackBar(message: string) {
      this._snackBar.open(message, 'X', {
        duration: 2000,
        verticalPosition: "top",
        horizontalPosition: "right"
      });
    }
    getEntidade(id: number): Observable<any> {
      return this.httpClient.get(`${this.getUrl()}/${id}`);
    }
    createEntidade(aluno: Object): Observable<Object> {
      return this.httpClient.post(`${this.getUrl()}`, aluno);
    }
    updateEntidate(id: number, value: any): Observable<Object> {
      return this.httpClient.put(`${this.getUrl()}/${id}`, value);
    }
    deleteEntidade(id: number): Observable<any> {
      return this.httpClient.delete(`${this.getUrl()}/${id}`, { responseType: 'text' });
    }
    getEntidadeList(): Observable<any> {
      return this.httpClient.get(`${this.getUrl()}`);
    }

    protected abstract endPoint():String;

    getUrl(): string {
      return `${this.baseUrl}${this.endPoint()}`;
    }
}
