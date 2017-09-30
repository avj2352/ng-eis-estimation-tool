//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
//3rd party imports
import { UIRouterModule } from '@uirouter/angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
//Route definitions
import { loginState, homeState, aboutState, errorState } from './app.router';
//Component definition
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { BallparkComponent } from './pages/home/ballpark/ballpark.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginService } from './services/login/login.service';
import { LoginUserEffectService } from './store/effects/login-user-effect.service';

// Initial Store values
import {INITIAL_APPLICATION_STATE} from './store/application-state';
//Implement reducers
import * as reducerFunctions from './store/reducers/store-reducer';

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
    ReactiveFormsModule,
    HttpModule,
    Ng2SmartTableModule,    
    UIRouterModule.forRoot({states:[loginState,homeState,aboutState,errorState],useHash:true}),
    StoreModule.provideStore(reducerFunctions.storeReducer,INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoginUserEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    LoginService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
