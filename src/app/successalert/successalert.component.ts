import { Component } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent {
  userName = '';
  inputString: string;
  enableButton = false;

  validateUserName(event: Event) {
    this.inputString = (<HTMLInputElement>event.target).value;
    if (this.inputString) {
      this.enableButton = true;
    } else {
      this.enableButton = false;
    }
  }

  restInput() {
    this.userName = '';
    this.enableButton=false;
  }
  
}
