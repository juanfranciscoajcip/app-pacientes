import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarExamenComponent } from './insertar-examen.component';

describe('InsertarExamenComponent', () => {
  let component: InsertarExamenComponent;
  let fixture: ComponentFixture<InsertarExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
