import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trader-page',
  templateUrl: './trader-page.component.html',
  styleUrls: ['./trader-page.component.scss'],
})
export class TraderPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
