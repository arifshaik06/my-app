import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataofempComponent } from './dataofemp.component';

describe('DataofempComponent', () => {
  let component: DataofempComponent;
  let fixture: ComponentFixture<DataofempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataofempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataofempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
