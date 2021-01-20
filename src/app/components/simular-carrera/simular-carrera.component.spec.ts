import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularCarreraComponent } from './simular-carrera.component';

describe('SimularCarreraComponent', () => {
  let component: SimularCarreraComponent;
  let fixture: ComponentFixture<SimularCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimularCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
