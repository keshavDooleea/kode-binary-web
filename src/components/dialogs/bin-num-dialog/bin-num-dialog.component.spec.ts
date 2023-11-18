import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinNumDialogComponent } from './bin-num-dialog.component';

describe('BinNumDialogComponent', () => {
  let component: BinNumDialogComponent;
  let fixture: ComponentFixture<BinNumDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BinNumDialogComponent]
    });
    fixture = TestBed.createComponent(BinNumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
