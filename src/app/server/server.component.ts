import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
// @Component({
//   selector: 'app-server',
//   template: '<app-client></app-client>'
// })
export class ServerComponent {
  serverId: number = 29;
  serverStatus: string = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    //return this.serverStatus;

    console.log(this.serverStatus);
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
