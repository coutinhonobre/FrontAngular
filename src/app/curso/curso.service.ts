import { Injectable } from '@angular/core';
import { BackendApiService } from '../backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends BackendApiService {
  protected endPoint(): string {
    return "cursos";
  }
}
