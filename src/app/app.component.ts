import { Component, OnInit } from '@angular/core';
import { Observable } from 'RxJs';
import 'RxJs/Rx';

import { Res} from './res';
import {AppService} from './app-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Resources';
  res: Observable<Res[]>;

  constructor (private _r: AppService) {}
  ngOnInit() {

    this.res = this._r.GetRes().map(res => res);

  }
}
