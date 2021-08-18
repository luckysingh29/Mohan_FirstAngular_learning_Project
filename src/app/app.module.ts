import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerComponent } from './server/server.component';
import { ClientComponent } from './client/client.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningComponent } from './warning/warning.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ServerComponent,
    ClientComponent,
    SuccessalertComponent,
    WarningComponent,
    DirectiveComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
