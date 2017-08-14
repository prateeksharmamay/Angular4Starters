import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]'
})

export class BasicHighlightDirective implements OnInit{
  /*private elementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }*/

  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
