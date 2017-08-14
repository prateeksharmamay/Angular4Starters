
import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})

export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'aqua';

  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.cursor') cursor: string;

  @HostListener('mouseenter') mouseover(eventData : Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'aqua');
    // this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');

    // this.bgColor = 'aqua';
    // this.cursor = 'pointer';

    this.bgColor = this.highlightColor;
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') mouseleft(eventData : Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    // this.bgColor = 'transparent';
    this.bgColor = this.defaultColor;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.bgColor  = this.defaultColor;
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'aqua');
  }
}
