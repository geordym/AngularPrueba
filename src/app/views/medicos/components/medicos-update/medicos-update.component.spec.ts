import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosUpdateComponent } from './medicos-update.component';

describe('MedicosUpdateComponent', () => {
  let component: MedicosUpdateComponent;
  let fixture: ComponentFixture<MedicosUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicosUpdateComponent]
    });
    fixture = TestBed.createComponent(MedicosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
