import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { BackendApiService } from '../backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends BackendApiService {
  protected endPoint(): String {
    return "cursos";
  }
}
