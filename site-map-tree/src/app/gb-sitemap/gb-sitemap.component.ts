import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ContactServerService } from '../services/contact-server.service';

@Component({
  selector: 'app-gb-sitemap',
  templateUrl: './gb-sitemap.component.html',
  styleUrls: ['./gb-sitemap.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GbSitemapComponent implements OnInit {

  siteMapTree: Array<any>;
  dummyObj: object;

  constructor(private contactServerService: ContactServerService) {
    this.dummyObj = this.contactServerService.getSiteMapObject();
    /*this.contactServerService.getSiteMapObject()
     .subscribe(
     (siteMapTree: object) => {
     this.dummyObj = siteMapTree;
     },
     (error) => {
     console.log(error);
     }
     );*/
  }

  /*
      CALL A SERVICE TO FETCH THIS DATA FROM THE SERVER
   */

  /*dummyObj =  {
      "name" : "HomePage",
      "showChild" : false,
      "children" : [
        {
          "name" : "IT",
          "showChild" : false,
          "children" : [
            {
              "name" : "Amazon",
              "showChild" : false,
              "children" : [ ]
            },
            {
              "name" : "Laptops",
              "showChild" : false,
              "children" : [
                {
                  "name" : "MacbookPro",
                  "showChild" : false,
                  "children" : [ ]
                },
                {
                  "name" : "BigLaptops.com",
                  "showChild" : false,
                  "children" : [ ]
                },
                {
                  "name" : "BuyOtherLaptop",
                  "showChild" : false,
                  "children" : [ ]
                }
              ]
            },
            {
              "name" : "PrinterServices",
              "showChild" : false,
              "children" : [
                {
                  "name" : "HPAll-in-OnePrinter",
                  "showChild" : false,
                  "children" : [ ]
                },
                {
                  "name" : "BuyPrinters",
                  "showChild" : false,
                  "children" : [ ]
                },
                {
                  "name" : "PrinterRepair",
                  "showChild" : false,
                  "children" : [ ]
                }
              ]
            }
          ]
        },
        {
          "name" : "TranslationServices",
          "showChild" : false,
          "children" : [
            {
              "name" : "TranslationSoftware",
              "showChild" : false,
              "children" : [
                {
                  "name" : "GoogleTranslate",
                  "showChild" : false,
                  "children" : [ ]
                },
                {
                  "name" : "TranslationSoftwareExample",
                  "showChild" : false,
                  "children" : [ ]
                }
              ]
            },
            {
              "name" : "RequestTranslationService",
              "showChild" : false,
              "children" : [ ]
            }
          ]
        }
      ]
  }*/

  ngOnInit(){
    this.siteMapTree = [
      this.dummyObj
    ]

  }
}
