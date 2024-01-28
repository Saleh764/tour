import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
 @Output() menuButtonBar: EventEmitter<boolean>=new EventEmitter<boolean>()

 menuButtonBarClicked(){
  this.menuButtonBar.emit()

 }
 navbarfixed : boolean = false

 @HostListener('window:scroll',['$event']) onscroll(){
  if(window.scrollY>100){
    this.navbarfixed=true;
  }
  else{
    this.navbarfixed=false;
  }
 }
  

}
