import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderConfigurationComponent } from './slider-configuration.component';

describe('SliderConfigurationComponent', () => {
  let component: SliderConfigurationComponent;
  let fixture: ComponentFixture<SliderConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderConfigurationComponent]
    });
    fixture = TestBed.createComponent(SliderConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
