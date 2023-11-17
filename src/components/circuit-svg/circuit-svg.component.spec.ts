import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitSvgComponent } from './circuit-svg.component';

describe('CircuitSvgComponent', () => {
  let component: CircuitSvgComponent;
  let fixture: ComponentFixture<CircuitSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircuitSvgComponent]
    });
    fixture = TestBed.createComponent(CircuitSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
