import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects'; //Actions from @ngrx/effects is different from  
import { Action } from '@ngrx/store'; // Action from @ngrx/store library
import { LoginService } from './../../services/login/login.service';
import { LOGIN_ERROR_ACTION, LOGIN_USER_ACTION, USER_LOGGEDIN_ACTION, LoginUserAction, UserLoggedInAction, LoginErrorAction } from './../actions/actions';

@Injectable()
export class LoginUserEffectService {

  constructor(private actions$:Actions, private loginService:LoginService) {

   }//end:constructor

   @Effect() loginUser$: Observable<Action> = this.actions$
   .ofType(LOGIN_USER_ACTION)   
   .debug('action received')
   .switchMap((action:LoginUserAction) => this.loginService.loginUser(action.payload.username,action.payload.password))
   .debug('data received from HTTP request')
   .map(loggedInDetails => new UserLoggedInAction(loggedInDetails));

}//end:class-LoginUserEffectService
