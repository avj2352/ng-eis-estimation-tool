import { Component, OnInit } from '@angular/core';
import {UIRouterModule ,UIROUTER_DIRECTIVES, StateService} from '@uirouter/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  state:StateService;

  constructor() {
    // this.state = new StateService();
  }//end:constructor

  onSubmit() { 
    console.log('Form Submitted');
    this.state.go('home');
  };//end:onSubmit

  ngOnInit() {
  }//end:ngOnInit

}//end:class-LoginComponent
