# EIS Estimation Tool

# Angular 4 Form Validation

- Template-driven Forms
- Model-driven Forms

For Template driven forms approach, You need to have the following:

- `app.module.ts`
```ts
import { FormsModule } from '@angular/forms'; // Include the FormsModule

@NgModule({
  declarations: [    
    HeaderComponent,
    BallparkComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

- `login.component.ts`

```ts
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

  onSubmit(loginForm) { 
    console.log('Form Submitted', loginForm);
    this.store.dispatch(new LoginUserAction({username:loginForm.username,password:loginForm.password}));
    this.state.go('home');
  };//end:onSubmit

  ngOnInit() {
  }//end:ngOnInit

}//end:class-LoginComponent
```
---

- `login.component.html`

```html
<div class="login-page">
  <img src="./assets/img/philips-shield-logo.png" width="100px" height="auto"/>
  <h1><strong>Philips</strong> EIS Estimation Tool</h1>
  <!-- You need to create a variable using # called loginForm and assign it ngForm -->
  <!-- create an event binder - (ngSubmit) and call the custom function, passiwing it loginForm.value -->
  <form #loginForm="ngForm" class="login-form" (ngSubmit)="onSubmit(loginForm.value)">
    <!-- ngModel by default will create the same variable name as the input name property -->
    <input name="username" type="text" placeholder="username@philips.com" ngModel/>
    <!-- ngModel by default will create the same variable name as the input name property -->
    <input name="password" type="password" ngModel/>
    <!-- for ngSubmit to work, input type should be submit -->
    <input class="btn btn-primary" type="submit"/>
    <p><a>Forgot Password ?</a></p>
  </form>
</div>  
```
---

# Model Driven Form Validation using Angular 2








# Recap

- Discussed need for the UI.
- Had come up with Wireframe of the Tool.
- Reviewed the same in the previous meeting.
- Had discussions with Subashini and Parveen again on the planning of the Estimation.
- Some of the requirements were not aligned / clear.

# Re-planning

- Had discussions with Subashini, Praveen (Estimation Template)
- There can only by:
    - `Ball park Estimate`
    - `Detailed Estimate`

- Ball Park estimate - Require the need for `Epics, Features, Stories`
- Require a way to manage the following w.r.t each project:
    - Configure / Manage Epics (weightage / storypoints)
    - Configure / Manage Features (weightage / storypoints)
    - Configure / Manage Stories (weightage / storypoints)
- Require a way to change conifgurables.  

# MileStone Plan (Current and Planned Approach)

## Ease of use for the user 
- Type of Project, 
- Simple set of questions (SDC Development Questionnaire).

## Ease of flow between the Screens
- Access / Authentication `(align with EIS SD Portal)`
- Type of Project `(new)`
- Project Details `(new)`
- Configuration
- Requirement Mapping
- Deliverables

## Features
- Single Sign on
- Ability Download the `Epics, Features, Stories (in word/excel format)`
- Persist data on `EIS SD server`.

# Current Status Summary of the activity
- EIS Estimation Tool design initiated `(Currently working on integrating it with EIS SD)`.

# End Q3 Objective of the activity
- Integration with EIS SD.
- Prototype application

# End Q4 Objective of the activity
- Working of EIS Estimation Tool.

# Inputs received
- EIS Solution Delivery Estimation
- Project -> Opportunities
- Epics > Features > Stories > Tasks
- Export as Template / Excel
- Ability to Clone / Copy Opportunities
- Unified theme
