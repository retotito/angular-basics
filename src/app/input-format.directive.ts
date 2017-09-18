import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @HostListener('focus') onfocus() {
    console.log("on Focus");
  }

  constructor() { }

}
