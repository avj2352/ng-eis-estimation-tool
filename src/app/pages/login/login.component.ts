import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UIRouterModule ,UIROUTER_DIRECTIVES, StateService } from '@uirouter/angular';

import { ApplicationLevelData } from './../../data/dao/application-level-data';
import { LoginService } from './../../services/login/login.service';
import { LoginRequestAction } from './../../store/actions/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private state:StateService,
    private store:Store<ApplicationLevelData>,
  ) {
    // this.state = new StateService();
  }//end:constructor

  ngOnInit() {
    this.store.subscribe((storeValue)=>{
      console.log('Store values are: ', storeValue);
    });//end:subscribe
  }//end:ngOnInit

  onSubmit(loginForm) { 
    console.log('Form Submitted', loginForm);
    this.store.dispatch(new LoginRequestAction({username:loginForm.username,password:loginForm.password}));
    this.state.go('home');
  };//end:onSubmit

}//end:class-LoginComponent
