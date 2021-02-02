import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote?: Quote;

  
  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style["boxShadow"] = "0 0 20px #000000";
  }
}
