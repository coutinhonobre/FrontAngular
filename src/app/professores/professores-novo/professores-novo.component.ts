import { Component } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';
import { Professor } from '../professor.model';

@Component({
  selector: 'app-professores-novo',
  templateUrl: './professores-novo.component.html',
  styleUrls: ['./professores-novo.component.css']
})
export class ProfessoresNovoComponent {
  professor: Professor = new Professor()

  constructor(
    private professorService: ProfessorService,
    private router: Router,
  ) { }

  salvar() {
    this.professorService.createEntidade(this.professor)
    .subscribe(
      dado => {
        console.log(dado)
        this.professorService.openSnackBar('Professor criado com sucesso !');
        this.router.navigate(['/professores']);
      }
    )
  }
  cancelar() {
    this.router.navigate(['/professores']);
  }

}
