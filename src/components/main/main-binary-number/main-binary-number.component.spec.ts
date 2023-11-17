import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBinaryNumberComponent } from './main-binary-number.component';

describe('MainBinaryNumberComponent', () => {
  let component: MainBinaryNumberComponent;
  let fixture: ComponentFixture<MainBinaryNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBinaryNumberComponent]
    });
    fixture = TestBed.createComponent(MainBinaryNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
