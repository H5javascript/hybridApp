import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {BooksPage} from "../books/books";
import {ForFreePage} from "../for-free/for-free";
import { MinePage} from "../mine/mine";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;//首页
  tab2Root = BooksPage;//书架
  tab3Root = ForFreePage;//就等免费
  tab4Root = MinePage;//我的

  constructor() {

  }
}
