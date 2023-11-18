import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitNumToBinComponent } from './circuit-num-to-bin.component';

describe('CircuitNumToBinComponent', () => {
  let component: CircuitNumToBinComponent;
  let fixture: ComponentFixture<CircuitNumToBinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircuitNumToBinComponent]
    });
    fixture = TestBed.createComponent(CircuitNumToBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
