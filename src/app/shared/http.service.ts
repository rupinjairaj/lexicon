import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConstants } from '../constants/constants';

import 'rxjs/add/operator/map';
import { AppComponent } from '../app.component';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  setHeaders() {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')

    return headers;
  }

  getWordData(requestData) {
    return this.http.post(
      AppConstants.LexiconAPI,
      requestData,
      {
        headers: this.setHeaders()
      }
    )
  }
}