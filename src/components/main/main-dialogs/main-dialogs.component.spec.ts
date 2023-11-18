import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDialogsComponent } from './main-dialogs.component';

describe('MainDialogsComponent', () => {
  let component: MainDialogsComponent;
  let fixture: ComponentFixture<MainDialogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDialogsComponent]
    });
    fixture = TestBed.createComponent(MainDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
