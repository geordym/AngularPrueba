import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosCreateComponent } from './medicos-create.component';

describe('MedicosCreateComponent', () => {
  let component: MedicosCreateComponent;
  let fixture: ComponentFixture<MedicosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicosCreateComponent]
    });
    fixture = TestBed.createComponent(MedicosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
