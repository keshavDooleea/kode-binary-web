import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNumberBinaryComponent } from './main-number-binary.component';

describe('MainNumberBinaryComponent', () => {
  let component: MainNumberBinaryComponent;
  let fixture: ComponentFixture<MainNumberBinaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainNumberBinaryComponent]
    });
    fixture = TestBed.createComponent(MainNumberBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
