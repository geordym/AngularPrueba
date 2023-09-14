import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosSearchComponent } from './medicos-search.component';

describe('MedicosSearchComponent', () => {
  let component: MedicosSearchComponent;
  let fixture: ComponentFixture<MedicosSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicosSearchComponent]
    });
    fixture = TestBed.createComponent(MedicosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
