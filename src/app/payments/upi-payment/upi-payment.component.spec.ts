import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiPaymetComponent } from './upi-payment.component';

describe('UpiPaymetComponent', () => {
  let component: UpiPaymetComponent;
  let fixture: ComponentFixture<UpiPaymetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiPaymetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiPaymetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
