import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { PosteFormComponent } from './recruteur/poste/poste-form.component';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  JsonpModule,
		              FormsModule ],
  declarations: [ AppComponent,
                  PosteFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
