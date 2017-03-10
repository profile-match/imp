import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class OffersService {
  // private property to store all backend URLs
  private _backendURL: any;

  constructor(private http: Http) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  /**
   * Function to return list of offers
   *
   * @returns {Observable<R>}
   */
  fetch(): Observable<any[]> {
    //TODO
    const requestOptions = { headers: new Headers({'Content-Type': 'application/json'})};
    //if (localStorage.getItem("user") != null && localStorage.getItem("ut") == "recruteur") {
      //localStorage.setItem("user","1");
      return this.http.get(this._backendURL.allOffers.replace(':id', localStorage.getItem("user")))
        .map((res: Response) =>   res.json()

        );
    //}
  }

  /**
   * Function to return request options
   *
   * @returns {RequestOptions}
   */
  private _options(headerList: Object = {}): RequestOptions {
    const headers = new Headers(Object.assign({'Content-Type': 'application/json'}, headerList));
    return new RequestOptions({headers: headers});
  }

}
