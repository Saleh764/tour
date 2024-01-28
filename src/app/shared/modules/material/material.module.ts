import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    MatButtonModule,
    MatInputModule, FormsModule
  ],
})
export class MaterialModule { }
