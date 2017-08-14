import {Component, Input, OnInit} from '@angular/core';
import {SiteMapTree} from "../site-map-tree/siteMapTree";

@Component({
  selector: 'app-gb-tree-view',
  templateUrl: './gb-tree-view.component.html',
  styleUrls: ['./gb-tree-view.component.css']
})
export class GbTreeViewComponent implements OnInit {

  @Input() siteTree: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  toggle(subtree){
    subtree.showChild = !subtree.showChild
  }

  getNameClass(subtree){
    return subtree.showChild == true ? '' : '';
  }
}
