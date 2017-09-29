import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
/*引入模块*/
import { HomePage } from '../pages/home/home';
import {BooksPage} from "../pages/books/books";
import {ForFreePage} from "../pages/for-free/for-free";
import { MinePage } from "../pages/mine/mine";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NativeService} from "../providers/NativeService";

@NgModule({
  declarations: [
    MyApp,
    BooksPage,
    ForFreePage,
    HomePage,
    MinePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BooksPage,
    ForFreePage,
    HomePage,
    MinePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
