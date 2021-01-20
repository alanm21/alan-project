import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCircuitoComponent } from './nuevo-circuito.component';

describe('NuevoCircuitoComponent', () => {
  let component: NuevoCircuitoComponent;
  let fixture: ComponentFixture<NuevoCircuitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCircuitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
