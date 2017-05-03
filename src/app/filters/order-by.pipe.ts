import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  static _orderByComparator(a: any, b: any): number {

    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
    } else {

      if (parseFloat(a) < parseFloat(b)) {
        return -1;
      }
      if (parseFloat(a) > parseFloat(b)) {
        return 1;
      }
    }

    return 0;
  }

  transform(input: any, [config = '+']): any {

    if (!Array.isArray(input)) {
      return input;
    }

    if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
      const propertyToCheck: string = !Array.isArray(config) ? config : config[0];
      const desc = propertyToCheck.substr(0, 1) === '-';

       if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+'){
         return !desc ? input.sort() : input.sort().reverse();
       } else {
         const property: string = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
           ? propertyToCheck.substr(1)
           : propertyToCheck;

          return input.sort(function(a: any, b: any) {
            let comparison;
            if (!desc) {
              comparison = OrderByPipe._orderByComparator(a[property], b[property]);
            } else {
              comparison = -OrderByPipe._orderByComparator(a[property], b[property]);
            }
            return comparison;
          });
        }
      }
  }
}
