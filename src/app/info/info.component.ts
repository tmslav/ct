import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  slide: Boolean;
  slide1: Boolean;

  constructor() { }

  ngOnInit() {
    this.slide = false;
    setTimeout( () => {
      this.slide = true;
      setTimeout( () => { this.slide1 = true; }, 2500);
    }, 500);
  }

}
