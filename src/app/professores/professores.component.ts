import { Component, OnInit } from '@angular/core';
import { Professor } from './professor.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professor: Professor = new Professor();

  professorDataSource: MatTableDataSource<Professor>;
  displayedProfessores: String[] = ['idProfessor', 'nomeProfessor', 'update', 'delete'];

  constructor() { }

  ngOnInit(): void {
  }

  navigateToProfessorNovo() {
    
  }

  filtrarProfessores(event: Event) {
  }

  navigateToProfessorEditar(professor: Professor) {
  }

}
