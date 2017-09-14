//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UIRouterModule} from '@uirouter/angular';
import { AppComponent } from './app.component';
//Route definitions
import {homeState,aboutState} from './app.router';
//Component definition
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({states:[homeState,aboutState],useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
