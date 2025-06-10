import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirective {

  constructor(el :ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow'; // Highlight the element with yellow background
  }

}
