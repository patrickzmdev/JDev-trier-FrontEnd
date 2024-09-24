import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoExistenteComponent } from './pagina-nao-existente.component';

describe('PaginaNaoExistenteComponent', () => {
  let component: PaginaNaoExistenteComponent;
  let fixture: ComponentFixture<PaginaNaoExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaNaoExistenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaNaoExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
