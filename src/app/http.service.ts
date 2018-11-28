import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://assignment-angular.firebaseio.com/";
  constructor(private http: HttpClient) {
  }
  getData(url) {
    return this.http.get(this.baseUrl + url + ".json")
  }
}
