import { Injectable } from '@angular/core';
import { BackendApiService } from '../backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService extends BackendApiService {
  protected endPoint(): string {
    return "professores";
  }
}
