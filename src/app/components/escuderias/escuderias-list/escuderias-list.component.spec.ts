import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuderiasListComponent } from './escuderias-list.component';

describe('EscuderiasListComponent', () => {
  let component: EscuderiasListComponent;
  let fixture: ComponentFixture<EscuderiasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuderiasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuderiasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
