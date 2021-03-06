import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;

@HostListener('input', ['$event'])
    onInput(event: Event) {
        this.el.nativeElement.value = (<HTMLInputElement>event.currentTarget).value.replace(/[^0-9]/g, '');
    }
}
