import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasUpdateComponent } from './facturas-update.component';

describe('FacturasUpdateComponent', () => {
  let component: FacturasUpdateComponent;
  let fixture: ComponentFixture<FacturasUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturasUpdateComponent]
    });
    fixture = TestBed.createComponent(FacturasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
