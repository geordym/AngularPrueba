import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasCreateComponent } from './egresos-create.component';

describe('FacturasCreateComponent', () => {
  let component: FacturasCreateComponent;
  let fixture: ComponentFixture<FacturasCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturasCreateComponent]
    });
    fixture = TestBed.createComponent(FacturasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
