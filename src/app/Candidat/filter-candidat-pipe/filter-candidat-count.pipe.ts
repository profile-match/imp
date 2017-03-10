import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCandidatCount'
})
export class FilterCandidatCountPipe implements PipeTransform {

  transform(items: any[], args: any[]): any {

    if(args){
      return items.filter(function( item ) {
        return item.nom.toString().toLowerCase().indexOf(args.toString().toLowerCase())!== -1
          || item.prenom.toString().toLowerCase().indexOf(args.toString().toLowerCase())!== -1
          || item.competence.toString().toLowerCase().indexOf(args.toString().toLowerCase())!== -1
          || item.email.toString().toLowerCase().indexOf(args.toString().toLowerCase())!== -1
          || item.nom.toString().toLowerCase().concat(" "+item.prenom.toString().toLowerCase()).indexOf(args.toString().toLowerCase())!== -1
          || item.formation.toString().toLowerCase().indexOf(args.toString().toLowerCase())!== -1;
      }).length;
    }else{
      return items.length;
    }

  }

}
