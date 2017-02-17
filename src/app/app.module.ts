import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component'
import {HomeComponent} from './home/home.component'
import {DrawingComponent} from './drawing/drawing.component'
import {LoginComponent} from './login/login.component'

import {AppRoutingModule} from './app-routing.module'

import {DrawingService} from './drawing/drawing.service'

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HomeComponent, DrawingComponent, LoginComponent ],
  providers: [DrawingService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
