import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './curso/cursos.component';
import { CursoNovoComponent } from './curso/curso-novo.component';
import { CursoEditarComponent } from './curso/curso-editar.component';
import { AlunoNovoComponent } from './aluno/aluno-novo/aluno-novo.component';
import { AlunosComponent } from './aluno/alunos/alunos.component';
import { AlunoEditarComponent } from './aluno/aluno-editar/aluno-editar.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessoresNovoComponent } from './professores/professores-novo/professores-novo.component';
import { ProfessoresEditarComponent } from './professores/professores-editar/professores-editar.component';

const routes: Routes = [
  { path: "",
    component: HomeComponent
  },
  {
    path: "cursos",
    component: CursosComponent
  },
  {
    path: "curso-novo",
    component: CursoNovoComponent
  },
  {
    path: "curso-editar/:id",
    component: CursoEditarComponent,
    pathMatch: 'full'
  },
  {
    path: "alunos",
    component: AlunosComponent
  },
  {
    path: "aluno-novo",
    component: AlunoNovoComponent
  },
  {
    path: "aluno-editar/:id",
    component: AlunoEditarComponent
  },
  {
    path: "professores",
    component: ProfessoresComponent
  },
  {
    path: "professores-novo",
    component: ProfessoresNovoComponent
  },
  {
    path: "professor-editar/:id",
    component: ProfessoresEditarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
