import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { FilterComponent } from './filter/filter.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ]
})
export class HomePage {
  constructor(public modalController: ModalController) {}
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  async presentActionSheet() {
    const modal = await this.modalController.create({
      component: FilterComponent
    });
    return await modal.present();
  }
}
