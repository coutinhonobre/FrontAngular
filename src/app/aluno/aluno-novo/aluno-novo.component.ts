import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent implements OnInit {

    aluno: Aluno = new Aluno()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar() {
    
  }

  cancelar() {

  }

}
