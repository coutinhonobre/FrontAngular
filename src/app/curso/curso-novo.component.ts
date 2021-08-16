import { Router } from '@angular/router';
import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso.model';

@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css']
})

export class CursoNovoComponent implements OnInit {

  curso: Curso = new Curso();

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar() {
    this.cursoService.createCurso(this.curso)
    .subscribe(
      dado => {
        console.log(dado)
        this.cursoService.openSnackBar('Curso criado com sucesso !');
        this.router.navigate(['/cursos']);
      }
    )
  }

  cancelar() {
this.router.navigate(['/cursos']);
  }

}
