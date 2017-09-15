//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//3rd party imports
import {UIRouterModule} from '@uirouter/angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
//Route definitions
import {loginState,homeState,aboutState,errorState} from './app.router';
//Component definition
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {LoginComponent} from './pages/login/login.component';
import {ErrorComponent} from './pages/error/error.component';
import {BallparkComponent} from './pages/home/ballpark/ballpark.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    HeaderComponent,
    BallparkComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    UIRouterModule.forRoot({states:[loginState,homeState,aboutState,errorState],useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
