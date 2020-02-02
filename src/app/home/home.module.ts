import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import {HidenavModule} from 'ionic4-hidenav';
import { HomePage } from './home.page';
import { TraderPageComponent } from './trader-page/trader-page.component';
import { NewSignalsComponent } from './trader-page/new-signals/new-signals.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: ':id',
    component: TraderPageComponent
  },
 
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HidenavModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [FilterComponent],
  declarations: [HomePage,TraderPageComponent, NewSignalsComponent, FilterComponent]
})
export class HomePageModule {}
