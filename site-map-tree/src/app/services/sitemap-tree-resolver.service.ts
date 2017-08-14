import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ContactServerService} from "./contact-server.service";

const url: string = "";

/*@Injectable()
export class SitemapTreeResolverService implements Resolve<Object> {

  constructor(private contactServerService: ContactServerService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> | Promise<Object> | Object{
    return this.contactServerService.getSiteMapObject();
  }
}*/
