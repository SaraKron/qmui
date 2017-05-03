import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filter: string[]): any {

      if (filter && Array.isArray(value)) {
          const filterKeys = Object.keys(filter);
          return value.filter(item =>
              filterKeys.reduce((memo, keyName) =>
                  (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
      } else {
          return value;
      }
  }
}
