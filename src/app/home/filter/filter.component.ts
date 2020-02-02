import { Component, OnInit, HostListener } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @HostListener('click', ['$event.target'])
  onClick(event) {
   if(!document.querySelector('.modal').contains(event)){
     this.modalController.dismiss()
   }
  }
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

}
