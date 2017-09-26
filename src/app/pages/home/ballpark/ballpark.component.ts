import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eis-ballpark-component',
  templateUrl: './ballpark.component.html',
  styleUrls: ['./ballpark.component.scss']
})
export class BallparkComponent implements OnInit {
  title:string
  constructor() {
    this.title = 'Dashboard';
  }

  ngOnInit() {
  }

}
