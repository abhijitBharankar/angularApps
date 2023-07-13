import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]'
})
export class CharOnlyDirective {


  @HostListener('input',['$event'])

  OnInputChange(){
    console.log('custom directive calling')
    console.log(this.elementRef.nativeElement.value);
    let initialValue = this.elementRef.nativeElement.value

    this.elementRef.nativeElement.value = initialValue.replace(/[^a-zA-Z]*/g,'')
    
  }

  constructor(private elementRef : ElementRef) { }

}
