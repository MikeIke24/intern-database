import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NameDataComponent } from './name-data/name-data.component';
import { HttpModule }      from '@angular/http';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    NameDataComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
