import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent implements OnInit {

  aluno: Aluno = new Aluno()
  startDate = new Date(2000, 0, 2);

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  salvar() {
    this.convertDate();
    this.alunoService.createEntidade(this.aluno)
    .subscribe(
      dado => {
        console.log(dado)
        this.alunoService.openSnackBar('Aluno criado com sucesso !');
        this.router.navigate(['/alunos']);
      }
    )
  }

  private convertDate() {
    this.aluno.dt_nasc = this.datepipe.transform(this.aluno.dt_nasc, 'dd/MM/yyyy');
  }

  cancelar() {
    this.router.navigate(['/alunos']);
  }

}
