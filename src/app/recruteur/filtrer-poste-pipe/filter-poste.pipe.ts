import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPoste'
})
export class FilterPoste implements PipeTransform {

  transform(items: any[], args: any[]): any {

    if (args !== null) {
      return items.filter(function (item) {
        return item.reference.toString().toLowerCase().indexOf(args.toString().toLowerCase()) !== -1
            || item.intitule.toString().toLowerCase().indexOf(args.toString().toLowerCase()) !== -1
            || item.date_publication.toString().toLowerCase().indexOf(args.toString().toLowerCase()) !== -1
            || item.type_contrat.toString().toLowerCase().indexOf(args.toString().toLowerCase()) !== -1
            || item.resume.toString().toLowerCase().indexOf(args.toString().toLowerCase()) !== -1;

      });
    } else {
      return items;
    }
  }
}
