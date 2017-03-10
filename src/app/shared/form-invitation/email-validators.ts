import {FormControl} from '@angular/forms';

export class EmailValidators {

  static estMailValide(control: FormControl){
    const regex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*\.\w+$/i;
    // const regex = /^\w+@\w+\.\w+$/;


    return regex.test(control.value) ? null : {
        mailErreur: true
      }
  }

}
