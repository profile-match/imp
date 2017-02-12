import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'competenceType'
})
export class CompetenceTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
        return "Metier";
      case 1:
        return "Fonctionnelle";
      case 2:
        return "Technique";
      case 3:
        return "Linguistique";
    }

    return "N/A";
  }

}
