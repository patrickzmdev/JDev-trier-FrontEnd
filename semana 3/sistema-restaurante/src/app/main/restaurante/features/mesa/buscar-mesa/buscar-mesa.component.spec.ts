import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMesaComponent } from './buscar-mesa.component';

describe('BuscarMesaComponent', () => {
  let component: BuscarMesaComponent;
  let fixture: ComponentFixture<BuscarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
