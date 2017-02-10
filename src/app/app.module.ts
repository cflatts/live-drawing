import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent }  from './app.component'
import {HomeComponent} from './home/home.component'
import {DrawingComponent} from './drawing/drawing.component'
import {LoginComponent} from './login/login.component'

import {AppRoutingModule} from './app-routing.module'

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, DrawingComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
