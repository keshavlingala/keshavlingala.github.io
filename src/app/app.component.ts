import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
    AOS.init();
  }
}
