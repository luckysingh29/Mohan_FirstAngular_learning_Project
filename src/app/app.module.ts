import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerComponent } from './server/server.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ServerComponent,
    ClientComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
