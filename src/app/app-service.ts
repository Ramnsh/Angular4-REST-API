import { Injectable} from '@angular/core';
import {Http, HttpModule } from '@angular/http';
import { Observable } from 'Rxjs';
import 'rxjs/Rx';
import {Res} from './res'

@Injectable()
export class AppService {

    constructor (private _http: Http) {}

    GetRes (): Observable<Res[]> {
        return this._http.get('http://localhost:8000/api/heroes')
                .map( res => {
                    return res.json();
                });
    }
}