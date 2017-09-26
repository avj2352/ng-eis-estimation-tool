export interface LoginModel {
    firstName:string;
    lastName: string;
    email:string;
    userId:number;
    sessionId:string;
    // pariticipantList:{[key:number]:number}; //This is how typescript Map is defined
}//end:interface-LoginModel