import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarMedicoComponent } from './insertar-medico.component';

describe('InsertarMedicoComponent', () => {
  let component: InsertarMedicoComponent;
  let fixture: ComponentFixture<InsertarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
