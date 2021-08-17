import { Component } from '@angular/core';

@Component({
  selector: 'app-client', //regular element selector
  //selector: '[app-client]', Attribute selector methode
  //selector: '.app-client', //this is class selector methode
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  allowNewServer = false;
  serverName = 'MOhan';
  serverCreationStatus = 'Server was not created Yet.';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is Created.' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
  }
}
