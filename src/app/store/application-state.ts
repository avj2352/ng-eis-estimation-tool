import {StoreData, INITIAL_STORE_DATA} from './store-data';

export interface ApplicationState{
    storeData:StoreData;
}//end:ApplicationState

//NOTE: A Great place to start the initial application state of the project

export const INITIAL_APPLICATION_STATE:ApplicationState = {    
    storeData: INITIAL_STORE_DATA
};//end:INITIAL_APPLICATION_STATE