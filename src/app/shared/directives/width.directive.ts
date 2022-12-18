import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[width]',
})
export class WidthDirective {
  @Input()
  set width(width: string) {
    this.el.nativeElement.style.width = width;
  }
  constructor(private el: ElementRef) {}
}
