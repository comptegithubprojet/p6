import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSpotPage } from './list-spot';

@NgModule({
  declarations: [
    ListSpotPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSpotPage),
  ],
})
export class ListSpotPageModule {}
