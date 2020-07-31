import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
    console.log('%cHey\n🤟', 'font-size: 200px;text-align: center;');
  }
}
