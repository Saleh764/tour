import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-slider-configuration',
  templateUrl: './slider-configuration.component.html',
  styleUrls: ['./slider-configuration.component.scss']
})
export class SliderConfigurationComponent {
  color: ThemePalette = 'accent';
  checked = false
  disabled = false;

}
