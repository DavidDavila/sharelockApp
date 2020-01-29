import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'in',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule)
  },
  {
    path: '',
    component: StartComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}