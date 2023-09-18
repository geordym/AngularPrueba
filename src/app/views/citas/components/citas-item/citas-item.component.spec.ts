import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasItemComponent } from './citas-item.component';

describe('CitasItemComponent', () => {
  let component: CitasItemComponent;
  let fixture: ComponentFixture<CitasItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasItemComponent]
    });
    fixture = TestBed.createComponent(CitasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
