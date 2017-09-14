import {Component} from '@angular/core';

@Component({
    selector:'eis-home-component',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']
})
export class HomeComponent{
    title:String;
    constructor(){
        this.title = 'EIS Estimation Tool';
    }//end:constructor
}//end:class-HomeComponent