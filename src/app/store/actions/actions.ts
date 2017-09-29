import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { LoginRequestModel } from './../../data/model/login-request-model';
import { LoginModel } from './../../data/model/login-model';
import { ApplicationLevelData } from './../../data/dao/application-level-data';

export const USER_LOGGEDIN_ACTION = 'USER_LOGGEDIN_ACTION';
export const LOGIN_USER_ACTION = 'LOGIN_USER_ACTION';
export const LOGIN_ERROR_ACTION = 'LOGIN_ERROR_ACTION';

export class LoginUserAction implements Action {
    readonly type = LOGIN_USER_ACTION;    
    constructor(public payload?:LoginRequestModel){
    }//end:constructor
}//end:class-LoginUserAction

export class UserLoggedInAction implements Action {
    type = USER_LOGGEDIN_ACTION;
    constructor(public payload?:LoginModel){        
    }//end:constructor    
}//end:class-UserLoggedInAction

export class LoginErrorAction implements Action {
    type = LOGIN_ERROR_ACTION;
    constructor(public payload?:string){        
    }//end:constructor    
}//end:class-LoginErrorAction