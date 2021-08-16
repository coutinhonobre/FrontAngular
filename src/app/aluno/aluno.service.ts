import { Injectable } from '@angular/core';
import { BackendApiService } from '../backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends BackendApiService {
  protected endPoint(): String {
    return "alunos";
  }
}
