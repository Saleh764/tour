import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveStarComponent } from './five-star.component';

describe('FiveStarComponent', () => {
  let component: FiveStarComponent;
  let fixture: ComponentFixture<FiveStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveStarComponent]
    });
    fixture = TestBed.createComponent(FiveStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
