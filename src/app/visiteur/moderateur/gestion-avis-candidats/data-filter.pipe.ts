
import {Pipe, PipeTransform} from "@angular/core";
import {variable} from "@angular/compiler/src/output/output_ast";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {

            return array.filter( row=> row.nom.toLowerCase().indexOf(query.toLowerCase()) > -1
            || row.prenom.toLowerCase().indexOf(query.toLowerCase()) > -1
            || this.findWithAttr(row.avis, 'description', query.toLowerCase())
            )
              ;
        }
        return array;
    }

    findWithAttr(array, attr, value) {
      for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr].indexOf(value.toLowerCase()) > -1) {
          return true;
        }
      }
      return false;
}

}
