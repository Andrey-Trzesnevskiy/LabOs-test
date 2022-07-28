import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',
  pure: false
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any[], query: string, fieldName: string): any {
    let result: any[];
    if (!value) {
      return [];
    }
    if (!query || query === '') {
      return value;
    }

    query = query.toLowerCase();
    result = value.filter(item => {
      return item[fieldName].toLowerCase().includes(query);
    });
    return result;
  }

}
