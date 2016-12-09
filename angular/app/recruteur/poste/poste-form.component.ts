import { Component } from '@angular/core';
import {Http,Headers} from 'angular2/http';

import { Poste }    from './poste';

@Component({
  moduleId: module.id,
  selector: 'poste-form',
  templateUrl: 'poste-form.component.html'
})

export class PosteFormComponent {

    poste = new Poste("","",0,0,0,0,"","","","","","","","");
    
    public http: Http;
        constructor(http: Http){
        this.http = http;
    }
    
    public addPoste(){
        
    }


}
