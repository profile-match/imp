///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {CandidatComponent} from "./candidat.component";
import {HTTP_PROVIDERS} from 'angular2/http';
import {MenuComponent} from "./menu.component";
import {HeaderComponent} from "./header.component";


bootstrap(AppComponent);
bootstrap(MenuComponent);
bootstrap(HeaderComponent);
bootstrap(CandidatComponent, [
  HTTP_PROVIDERS
]);

