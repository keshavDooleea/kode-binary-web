import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitBinToNumComponent } from './circuit-bin-to-num.component';

describe('CircuitBinToNumComponent', () => {
  let component: CircuitBinToNumComponent;
  let fixture: ComponentFixture<CircuitBinToNumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircuitBinToNumComponent]
    });
    fixture = TestBed.createComponent(CircuitBinToNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
