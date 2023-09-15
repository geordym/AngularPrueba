import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasSearchComponent } from './facturas-search.component';

describe('FacturasSearchComponent', () => {
  let component: FacturasSearchComponent;
  let fixture: ComponentFixture<FacturasSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturasSearchComponent]
    });
    fixture = TestBed.createComponent(FacturasSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
