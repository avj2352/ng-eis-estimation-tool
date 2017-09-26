import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable } from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Need to import RxJS libraries if we need to make use of map skip merge operators..etc.,
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';

//CUSTOM OBSERVABLE DEBUGGER
//Custom debugging feature for RxJS library. we need to add type definition
const debuggerOn = true;

Observable.prototype.debug = function(message:string) {
  return this.do(
      nextValue => {
          if (debuggerOn) {
              console.log(message, nextValue)
          }
      },
      error => {
          if (debuggerOn) {
              console.error(message, error)
          }
      },
      () => {
          if (debuggerOn) {
              console.error("Observable completed - ", message)
          }
      }
  );
};

//we add the custom type definiton, by opening the type definition module - we do this using DECLARE
declare module 'rxjs/Observable' {
  interface Observable<T>{
    debug:(...any) => Observable<T>
  }
}//end:Observable module

//END: CUSTOM OBSERVABLE DEBUGGER

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
