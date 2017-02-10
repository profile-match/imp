import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';


@Injectable()
export class MailService {

  private _backendURL: any;

  constructor(private _http: Http) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }


  envoyerMail(mails : any ) : Observable<any>{
    return this._http.post(this._backendURL.sendMail, JSON.stringify(mails), this._options())
      .map((res: Response) => {
      console.log(res);
        if (res.status === 200) {
          return {"success" : "success"};
        }
        else {
          return {"success" : "nok"};
        }
      });
  }


  private _options(headerList: Object = {}): RequestOptions {
    const headers = new Headers(Object.assign({'Content-Type': 'application/json'}, headerList));
    return new RequestOptions({headers: headers});
  }

}
