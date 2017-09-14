import {Component} from '@angular/core';
//Custom components
import {HeaderComponent} from '../../components/header/header.component';

@Component({
    selector:'eis-home-component',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']
})
export class HomeComponent{
    title:String;
    constructor(){
        this.title = 'Dashboard';
    }//end:constructor
}//end:class-HomeComponent