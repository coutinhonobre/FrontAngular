import { CursoService } from './curso.service';
import { Curso } from './curso.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso: Curso = new Curso();

  cursoDataSource: MatTableDataSource<Curso>;
  displayedCursos: String[] = ['idcurso', 'nomecurso', 'update', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cursoService: CursoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCursoList();
  }

  getCursoList() {
    this.cursoService.getCursoList()
      .subscribe(
        dados => {
          this.cursoDataSource = new MatTableDataSource<Curso>(dados);
          this.cursoDataSource.paginator = this.paginator;
          this.cursoDataSource.sort = this.sort;
        },
        error => console.log(error)
      );
  }

  filtrarCursos(event: Event) {
    let valor = (event.target as HTMLInputElement).value;
    this.cursoDataSource.filter = valor;
  }

  deletarCurso(delcurso : Curso){
    this.cursoService.deleteCurso(delcurso.idcurso)
    .subscribe(
      dados => {
        this.cursoService.openSnackBar('Curso excluído !');
        this.getCursoList();
      }
    )
  }
  
  navigateToCursoNovo() {
    this.router.navigate(['/curso-novo']);
  }

  navigateToCursoEditar(curso: Curso) {
    this.router.navigate([`/curso-editar/${curso.idcurso}`]);
  }

}
