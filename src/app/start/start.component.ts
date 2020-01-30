import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: [ './start.component.scss' ]
})
export class StartComponent implements OnInit {
  public actualSlide = 1;
  constructor() {}

  ngOnInit() {
    
  }
}
