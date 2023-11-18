import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumBinDialogComponent } from './num-bin-dialog.component';

describe('NumBinDialogComponent', () => {
  let component: NumBinDialogComponent;
  let fixture: ComponentFixture<NumBinDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumBinDialogComponent]
    });
    fixture = TestBed.createComponent(NumBinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
