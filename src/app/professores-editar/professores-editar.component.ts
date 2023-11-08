import { Component, OnInit } from '@angular/core';
import { Professor } from '../professores/professor.model';
import { Router } from '@angular/router';
import { ProfessorService } from '../professores/professor.service';

@Component({
  selector: 'app-professores-editar',
  templateUrl: './professores-editar.component.html',
  styleUrls: ['./professores-editar.component.css']
})
export class ProfessoresEditarComponent implements OnInit {

  professor: Professor = new Professor()

  constructor(
    private professorService: ProfessorService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }

  salvar() {
    this.professorService.updateEntidate(this.professor.idProfessor,this.professor)
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
  navigateToAlunoEditar(professor: Professor) {
    console.log(professor)
    this.router.navigate([`/professor-editar/${professor.idProfessor}`]);
  }

}
