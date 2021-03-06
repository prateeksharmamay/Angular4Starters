import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';


/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',

  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */

  templateUrl: './custom-modal-sample.html',
  styleUrls: ['./custom-modal-sample.scss']

  /*template: `
    <div class="container-fluid custom-modal-container">
      <div class="row custom-modal-header">
        <div class="col-sm-12">
          <h1>A Custom modal design</h1>
        </div>
      </div>
      <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
        <div class="col-xs-12">
          <div class="jumbotron">
            <h1>Do the math to quit:</h1>
            <p class="lead">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong></p>
            <span>What is the sum?</span>
            <input class="form-control" type="text" #answer (keyup)="onKeyUp(answer.value)" autofocus>
          </div>
        </div>
      </div>
    </div>`*/
})


export class CustomModalSample implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<CustomModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }

  onKeyUp(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}

export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}
