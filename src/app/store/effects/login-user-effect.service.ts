import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects'; //Actions from @ngrx/effects is different from  
import { Action } from '@ngrx/store'; // Action from @ngrx/store library
import { LoginService } from './../../services/login/login.service';
import { LOGIN_USER_ACTION, USER_LOGGEDIN_ACTION, LoginUserAction, UserLoggedInAction } from './../actions/actions';

@Injectable()
export class LoginUserEffectService {

  constructor(private actions$:Actions, private loginService:LoginService) {

   }//end:constructor

   @Effect() loginUser$: Observable<Action> = this.actions$
   .ofType(LOGIN_USER_ACTION)   
   .switchMap((action:LoginUserAction) => this.loginService.loginUser(action.payload.username,action.payload.password))
   .map(loggedInDetails => new UserLoggedInAction(loggedInDetails));

}//end:class-LoginUserEffectService
