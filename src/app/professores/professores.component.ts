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

  displayedProfessores: string[] = ['idProfessor', 'nomeProfessor','titulacao' ,'update', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private professorService: ProfessorService,
  ) { }

  ngOnInit(): void {
    this.getProfessorList();
  }

  getProfessorList() {
    this.professorService.getEntidadeList()
    .subscribe(
      dados => {
        this.professorDataSource = new MatTableDataSource<Professor>(dados);
        this.professorDataSource.paginator = this.paginator;
        this.professorDataSource.sort = this.sort;
      },
      error => console.log(error)
    );
  }

  navigateToProfessorNovo() {
    this.router.navigate(['/professores-novo']);
  }

  deletarProfessor(delProfessor : Professor){
    this.professorService.deleteEntidade(delProfessor.idProfessor)
    .subscribe(
      dados => {
        this.professorService.openSnackBar('Professor excluído !');
        this.getProfessorList();
      }
    )
  }

  filtrarProfessores(event: Event) {
    let valor = (event.target as HTMLInputElement).value;
    this.professorDataSource.filter = valor;
  }

  navigateToProfessorEditar(professor: Professor) {
    this.router.navigate([`/professor-editar/${professor.idProfessor}`]);
  }


}
