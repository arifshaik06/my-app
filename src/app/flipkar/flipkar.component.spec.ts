import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkarComponent } from './flipkar.component';

describe('FlipkarComponent', () => {
  let component: FlipkarComponent;
  let fixture: ComponentFixture<FlipkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
