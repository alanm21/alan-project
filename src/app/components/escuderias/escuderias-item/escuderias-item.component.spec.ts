import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuderiasItemComponent } from './escuderias-item.component';

describe('EscuderiasItemComponent', () => {
  let component: EscuderiasItemComponent;
  let fixture: ComponentFixture<EscuderiasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuderiasItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuderiasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
