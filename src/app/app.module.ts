import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { TimerService } from './shared/time.service';
import { MailService } from './shared/mail.service';

/**
 * AppModule
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TimerService, MailService],
  bootstrap: [AppComponent]
})

export class AppModule { }
