import { Component } from '@angular/core';

import { Poste }    from './poste';

@Component({
  moduleId: module.id,
  selector: 'poste-form',
  templateUrl: 'poste-form.component.html'
})

export class PosteFormComponent {

    
    poste = new Poste("","",0,0,0,0,"","","","","","","","");
    
    public addPoste(){
        
        alert("valeur "+this.poste.reference);
    }


}
