import { Directive, ElementRef, HostListener} from '@angular/core';
// import{HostListener} from '@angular/common/'
@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(private elementRef : ElementRef) { }

  @HostListener('input', ['$event'])

  numberOnly(){
    let initialInputValue = this.elementRef.nativeElement.value
    
    this.elementRef.nativeElement.value = initialInputValue.replace(/[^0-9]*/g, '')

  }



}
