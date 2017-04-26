import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBackground]'
})

export class HighlightBackgroundDirective {
  @Input() highlightColor: string;

  constructor(private el: ElementRef) {
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
