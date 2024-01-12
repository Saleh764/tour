import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToulBarComponent } from './toul-bar.component';

describe('ToulBarComponent', () => {
  let component: ToulBarComponent;
  let fixture: ComponentFixture<ToulBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToulBarComponent]
    });
    fixture = TestBed.createComponent(ToulBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
