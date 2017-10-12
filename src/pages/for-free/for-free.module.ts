import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForFreePage } from './for-free';

@NgModule({
  declarations: [
    ForFreePage,
  ],
  imports: [
    IonicPageModule.forChild(ForFreePage),
  ],
})
export class ForFreePageModule {}
