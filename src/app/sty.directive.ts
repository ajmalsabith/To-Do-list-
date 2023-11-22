import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSty]'
})
export class StyDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color='green'
  }

}
