import {Component} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ErrorComponent} from './pages/error/error.component';

export const homeState = {name:'home',url:'/',component:HomeComponent};
export const aboutState = {name:'about',url:'/about',component:AboutComponent};
export const errorState = {name:'error',url:'**',component:ErrorComponent};