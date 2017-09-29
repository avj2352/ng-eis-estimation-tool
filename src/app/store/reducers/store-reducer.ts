import {Action} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import * as _ from 'lodash';
//Custom components
import {ApplicationState} from './../application-state';
import {LOGIN_ERROR_ACTION, LOGIN_USER_ACTION, USER_LOGGEDIN_ACTION, LoginUserAction, UserLoggedInAction, LoginErrorAction} from './../actions/actions';

//Our first reducer function
export function storeReducer(state:ApplicationState, action:Action):ApplicationState{
    switch(action.type){
        case LOGIN_USER_ACTION:
            return handleLoginUserAction(state,<any>action);
        case USER_LOGGEDIN_ACTION:
            return handleUserLoggedInAction(state,<any>action);
        case LOGIN_ERROR_ACTION:
            return handleLoginErrorAction(state,<any>action);
        default:
            return state;
    }
}//end:storeReducer

//inbuilt function
function handleLoginUserAction(state:ApplicationState, action:LoginUserAction):ApplicationState{
    const email = action.payload.username;
    const password = action.payload.password;
    // const currentUserId = state.uiState.currentThreadId;
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    newState.loginRequest.username = action.payload.username;
    newState.loginRequest.password = action.payload.password;
    return newState;
}//end:handleLoginUserAction

//inbuilt function
function handleUserLoggedInAction(state:ApplicationState, action:UserLoggedInAction):ApplicationState{
    const loginData = action.payload;
    // const currentUserId = state.uiState.currentThreadId;
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    //Just an awesome one liner for using lodash to create a map.
    newState.storeData = {
        login:{
            firstName:loginData.firstName,
            lastName:loginData.lastName,
            email:loginData.email,
            userId:loginData.userId,
            sessionId:loginData.sessionId
        },
        errorResponse:''
    };    
    return newState;
}//end:handleLoadUserThreadsAction


//inbuilt function
function handleLoginErrorAction(state:ApplicationState, action:LoginErrorAction):ApplicationState{
    const loginData = action.payload;
    // const currentUserId = state.uiState.currentThreadId;
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    newState.storeData = {
        login:{
            firstName:'',
            lastName:'',
            email:'',
            userId:0,
            sessionId:''
        },
        errorResponse:loginData
    };    
    return newState;
}//end:handleLoginErrorAction