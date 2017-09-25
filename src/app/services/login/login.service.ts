import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'; // for mapping response
import {ApplicationLevelData} from './../../data/dao/application-level-data';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http:Http) {

  }//end:constructor

  loginUser(): Observable<ApplicationLevelData> {
    return this.http.get('/api/dev')
      .map(res => {
        debugger;
        return res.json()
      });
  }//end:loginUser

}//end:class-LoginService
