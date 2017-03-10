import {FormGroup} from "@angular/forms";
export class CustomValidators {

  static passwordsEqual(group : FormGroup) {
    // email regex
    const regex = /^\w+\.\w+@gmail\.com$/;

    var newPassword =  group.controls['newPassword'].value;
    var passwordConfirm  =  group.controls['passwordConfirm'].value;

    return (newPassword===passwordConfirm || passwordConfirm==="") ? null : {
        passwordsEqual: true
      }
  }


}
