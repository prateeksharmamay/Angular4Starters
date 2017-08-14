import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GbSitemapComponent } from './gb-sitemap/gb-sitemap.component';
import { GbTreeViewComponent } from './gb-tree-view/gb-tree-view.component';
import {ContactServerService} from './services/contact-server.service';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    GbSitemapComponent,
    GbTreeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ContactServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
