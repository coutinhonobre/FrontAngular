import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresNovoComponent } from './professores-novo.component';

describe('ProfessoresNovoComponent', () => {
  let component: ProfessoresNovoComponent;
  let fixture: ComponentFixture<ProfessoresNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoresNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
