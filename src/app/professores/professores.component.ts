import { Component, OnInit, ViewChild } from '@angular/core';
import { Professor } from './professor.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ProfessorService } from './professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professor: Professor = new Professor();

  professorDataSource: MatTableDataSource<Professor>;
  displayedProfessores: String[] = ['idProfessor', 'nomeProfessor','titulacao' ,'update', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(
    private router: Router,
    private professorService: ProfessorService,

  ) { }

  ngOnInit(): void {
    this.getProfessorList();
  }

  navigateToProfessorNovo() {
    this.router.navigate(['/professores-novo']);
  }
  
  getProfessorList() {
    this.professorService.getEntidadeList()
      .subscribe(
        dados => {
          console.log(dados)
          this.professorDataSource = new MatTableDataSource<Professor>(dados);
          this.professorDataSource.paginator = this.paginator;
          this.professorDataSource.sort = this.sort;
        },
        error => console.log(error)
      );
  }

  filtrarProfessores(event: Event) {
  }

  navigateToProfessorEditar(professor: Professor) {
    console.log(professor)

    this.router.navigate([`/professor-editar/${professor.idProfessor}`]);

  }

  deletarProfessor(professor : Professor){
    this.professorService.deleteEntidade(professor.idProfessor)
    .subscribe(
      dados => {
        this.professorService.openSnackBar('Professor excluído !');
        this.getProfessorList();
      }
    )
  }
  

}
