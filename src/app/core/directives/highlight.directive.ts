import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'white';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.eleRef.nativeElement.style.background = 'white';

  }
   
  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => {
      this.eleRef.nativeElement.style.background = 'blue'; 
    }, 5000);
  }



}
