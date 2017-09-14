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
    settings:any;
    data:any;
    constructor(){
        this.title = 'Dashboard';
        this.settings = {
            columns: {
                id: {
                  title: 'ID'
                },
                name: {
                  title: 'Full Name'
                },
                username: {
                  title: 'User Name'
                },
                email: {
                  title: 'Email'
                }
              }
        };
        this.data = [
            {
              id: 1,
              name: "Leanne Graham",
              username: "Bret",
              email: "Sincere@april.biz"
            },
            {
              id: 2,
              name: "Ervin Howell",
              username: "Antonette",
              email: "Shanna@melissa.tv"
            },
            
            // ... list of items
            
            {
              id: 11,
              name: "Nicholas DuBuque",
              username: "Nicholas.Stanton",
              email: "Rey.Padberg@rosamond.biz"
            }
          ];
    }//end:constructor
    
}//end:class-HomeComponent