import { FormControl } from '@angular/forms';

export class CustomValidators {

  static validerEmail(control: FormControl) {
    // email regex
    const regex = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    // returns control
    return regex.test(control.value) ? null : {
      validerEmail: true
    }
  }
}
