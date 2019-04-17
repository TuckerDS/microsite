import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CmsService {
  private BASE_URL = 'http://localhost/api/pages/';
  private pages: object = {};

  constructor(public http: HttpClient) { this.onInit(); }

  private reMap(response) {
    return response;
  }

  private getRESTData(path: string) {
    const url = `${this.BASE_URL}${path}`;
    return this.http.get(url).pipe(
      map(res => {
        if (Array.isArray(res)) {
          return res[0];
        } else {
          return res;
        }
      })
    );
  }

  public getPage(options: any): Observable<any> {
    const page = options.page;

    if (this.pages[`${page}`]) {
      return of(this.pages[`${page}`]);
    } else {
      let observable = this.getRESTData(`${page}`);
      observable.subscribe(res => {
        return of(res);
      });
      return observable;
    }
  }


  private onInit(){
    // Get main content;
  }
}
