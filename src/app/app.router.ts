import {Component} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ErrorComponent} from './pages/error/error.component';
import {LoginComponent} from './pages/login/login.component';

//route definitions
export const loginState = {name:'login',url:'/',component:LoginComponent};
export const homeState = {name:'home',url:'/home',component:HomeComponent};
export const aboutState = {name:'about',url:'/about',component:AboutComponent};
export const errorState = {name:'error',url:'**',component:ErrorComponent};