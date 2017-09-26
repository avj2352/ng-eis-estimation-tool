import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UIRouterModule ,UIROUTER_DIRECTIVES, StateService } from '@uirouter/angular';

import { ApplicationLevelData } from './../../data/dao/application-level-data';
import { LoginService } from './../../services/login/login.service';
import { LoginUserAction } from './../../store/actions/actions';

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

  onSubmit() { 
    console.log('Form Submitted');
    this.store.dispatch(new LoginUserAction({username:'pramod.jingade@philips.com',password:'Welcome@123'}))
    this.state.go('home');
  };//end:onSubmit

  ngOnInit() {
  }//end:ngOnInit

}//end:class-LoginComponent
