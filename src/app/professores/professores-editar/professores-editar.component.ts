import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professores-editar',
  templateUrl: './professores-editar.component.html',
  styleUrls: ['./professores-editar.component.css']
})
export class ProfessoresEditarComponent implements OnInit {

  professor: Professor = new Professor()

  constructor(
    private professorService: ProfessorService,
    private rotaAtiva: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    console.log(this.rotaAtiva.snapshot.paramMap.get('id'))
    this.getProfessor(this.rotaAtiva.snapshot.paramMap.get('id'));
  }

  salvar() {
    console.log(this.professor)
    this.professorService.updateEntidate(this.professor.idProfessor,this.professor)
    .subscribe(
      dado => {
        console.log(dado)
        this.professorService.openSnackBar('Professor editado com sucesso !');
        this.router.navigate(['/professores']);
      }
    )
  }
  cancelar() {
    this.router.navigate(['/professores']);
  }

  getProfessor(id){
    console.log(id)
    this.professorService.getEntidade(id)
    .subscribe(
      dado => {
        this.professor = dado;
      },
      error => {
        console.log(error);
      }
    )
  }
  navigateToAlunoEditar(professor: Professor) {
    this.router.navigate([`/professor-editar/${professor.idProfessor}`]);
  }

}
