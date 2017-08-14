import { Component } from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { CustomModalContext, CustomModalSample } from './custom-modal-sample';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Modal]
})
export class AppComponent {
  public uploader: FileUploader = new FileUploader({ url: 'https://evening-anchorage-3159.herokuapp.com/api/'});
  constructor(public modal: Modal) {
  }

  /*get version(): string {
    return window.angular2ModalVer;
  }*/

  onClick() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
      .open();
  }

  openCustom() {
    return this.modal.open(CustomModalSample,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
}
