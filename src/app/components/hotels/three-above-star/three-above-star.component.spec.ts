import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeAboveStarComponent } from './three-above-star.component';

describe('ThreeAboveStarComponent', () => {
  let component: ThreeAboveStarComponent;
  let fixture: ComponentFixture<ThreeAboveStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeAboveStarComponent]
    });
    fixture = TestBed.createComponent(ThreeAboveStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
