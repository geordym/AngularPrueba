import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaShowComponent } from './cita-show.component';

describe('CitaShowComponent', () => {
  let component: CitaShowComponent;
  let fixture: ComponentFixture<CitaShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitaShowComponent]
    });
    fixture = TestBed.createComponent(CitaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
