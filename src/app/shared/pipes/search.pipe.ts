import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrOfObject: any[], term: string): any[] {
    if (!arrOfObject || !term) {
      return arrOfObject;
    }

    return arrOfObject.filter(item =>
      item?.car?.toLowerCase().includes(term.toLowerCase())
    );
  }
}
