import { LoginModel } from './../data/model/login-model';


export interface StoreData{
    login:LoginModel;
    errorResponse:string;
}//end:StoreData

// A Great place to define the initial state of the interface is right next to it
// We will create empty maps in the initial_store_data state
export const INITIAL_STORE_DATA:StoreData = {
    login:{
        firstName:'',
        lastName: '',
        email:'',
        userId:0,
        sessionId:''
    },
    errorResponse:''    
};//end:INITIAL_STORE_DATA