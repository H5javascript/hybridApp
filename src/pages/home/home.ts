import { Component,ViewChild  } from '@angular/core';
import { NavController,Slides  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
}
