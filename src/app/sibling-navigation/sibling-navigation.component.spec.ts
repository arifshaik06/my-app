import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingNavigationComponent } from './sibling-navigation.component';

describe('SiblingNavigationComponent', () => {
  let component: SiblingNavigationComponent;
  let fixture: ComponentFixture<SiblingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
