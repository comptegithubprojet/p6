import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignleViewPage } from './signle-view';

@NgModule({
  declarations: [
    SignleViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SignleViewPage),
  ],
})
export class SignleViewPageModule 
{

}
