import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: Aluno = new Aluno();

  alunoDataSource: MatTableDataSource<Aluno>;
  displayedAlunos: String[] = ['idaluno', 'nome', 'sexo', 'dt_nasc', 'update', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAlunoList();
  }

  getAlunoList() {
    this.alunoService.getEntidadeList()
      .subscribe(
        dados => {
          this.alunoDataSource = new MatTableDataSource<Aluno>(dados);
          this.alunoDataSource.paginator = this.paginator;
          this.alunoDataSource.sort = this.sort;
        },
        error => console.log(error)
      );
  }

  filtrarAlunos(event: Event) {
    let valor = (event.target as HTMLInputElement).value;
    this.alunoDataSource.filter = valor;
  }

  deletarAluno(delaluno : Aluno){
    this.alunoService.deleteEntidade(delaluno.idaluno)
    .subscribe(
      dados => {
        this.alunoService.openSnackBar('Aluno excluído !');
        this.getAlunoList();
      }
    )
  }
  
  navigateToAlunoNovo() {
    this.router.navigate(['/aluno-novo']);
  }

  navigateToAlunoEditar(aluno: Aluno) {
    this.router.navigate([`/aluno-editar/${aluno.idaluno}`]);
  }

}
