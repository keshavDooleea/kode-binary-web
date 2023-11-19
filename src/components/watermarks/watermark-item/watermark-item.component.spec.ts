import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkItemComponent } from './watermark-item.component';

describe('WatermarkItemComponent', () => {
  let component: WatermarkItemComponent;
  let fixture: ComponentFixture<WatermarkItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatermarkItemComponent]
    });
    fixture = TestBed.createComponent(WatermarkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
