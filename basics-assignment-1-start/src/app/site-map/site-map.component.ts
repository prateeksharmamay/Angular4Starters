import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {
  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const hostElem = this.el.nativeElement;
    console.log(hostElem.children);
    jQuery(function() {
      jQuery('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
      jQuery('.tree li.parent_li > span').on('click', function(e) {
        const children = jQuery(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(':visible')) {
          children.hide('slow');
          jQuery(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
          children.show('slow');
          jQuery(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
      });
    });

  }

}
