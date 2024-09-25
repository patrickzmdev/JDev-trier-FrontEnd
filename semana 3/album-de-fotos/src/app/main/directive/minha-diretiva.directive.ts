import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMinhaDiretiva]'
})
export class MinhaDiretivaDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
    el.nativeElement.style.height = '200px';
    el.nativeElement.style.width = '200px';
   }

}
