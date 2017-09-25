import {Action} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import * as _ from 'lodash';
//Custom components
import {ApplicationState} from './../application-state';
import {LOGIN_USER_ACTION,USER_LOGGEDIN_ACTION,LoginUserAction,UserLoggedInAction} from './../actions/actions';

//Our first reducer function
export function storeReducer(state:ApplicationState, action:Action):ApplicationState{
    switch(action.type){        
        case USER_LOGGEDIN_ACTION:
            return handleUserThreadsLoadedAction(state,<any>action);             
        default:
            return state;
    }
}//end:storeReducer

//inbuilt function
function handleUserThreadsLoadedAction(state:ApplicationState, action:UserLoggedInAction):ApplicationState{
    const userData = action.payload;
    // const currentUserId = state.uiState.currentThreadId;
    //Create a clone using Typescript
    const newState:ApplicationState = Object.assign({},state);
    //Just an awesome one liner for using lodash to create a map.
    newState.storeData = {
        login:{
            firstName:'',
            lastName: '',
            email:'',
            userId:0,
            sessionId:''
        }
    };    
    return newState;
}//end:handleLoadUserThreadsAction