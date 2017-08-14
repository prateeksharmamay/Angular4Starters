import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

const url: string = "";

export class ContactServerService {

  constructor() {
  // constructor(private http: Http) {
  }

  getSiteMapObject() {

    const data = {
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
    };
    return data;

    /*return this.http.get(url)
      .map(
        (response: Response) => {
          // const data = response.json();
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error) => {
          return Observable.throw("Error while connecting to the server.");
        }
      );*/
  }

}
