import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styles: [
    `
      p {
        color: red;
        font-size: medium;
      }
    `
  ]
})
export class WarningComponent {
 // servers = ['Server1', 'Server2', 'Server3'];
}
