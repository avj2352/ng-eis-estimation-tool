import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { ApplicationLevelData } from './../../data/dao/application-level-data';

export const USER_LOGGEDIN_ACTION = 'USER_LOGGEDIN_ACTION';
export const LOGIN_USER_ACTION = 'LOGIN_USER_ACTION';

export class LoginUserAction implements Action{
    type = LOGIN_USER_ACTION;    
}//end:class-LoginUserAction

export class UserLoggedInAction implements Action {
    type = USER_LOGGEDIN_ACTION;
    constructor(public payload?:ApplicationLevelData){
        
    }//end:constructor
    
}//end:class-UserLoggedInAction