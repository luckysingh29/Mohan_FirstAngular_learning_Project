import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
// @Component({
//   selector: 'app-server',
//   template: '<app-client></app-client>'
// })
export class ServerComponent {
  serverId: number = 29;
  serverStatus: string = 'offline';
  getServerStatus (){
    return this.serverStatus;
  }
}
