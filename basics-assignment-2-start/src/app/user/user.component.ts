
import { Component } from '@angular/core'
import {isNullOrUndefined} from "util";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html"
})

export class UserComponent {
  username: string = '';
  unFlag: boolean = true;

  submitUserName(){
    this.username = "";
  }

  /*onUserNameInput(event){
    event.target.value == isNullOrUndefined ? this.unFlag = true : this.unFlag = false;
  }*/

}
