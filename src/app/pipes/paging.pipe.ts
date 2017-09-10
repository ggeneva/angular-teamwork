import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paging',
  pure: false
})
export class PagingPipe implements PipeTransform {

  transform(array: any, page?: any): any {
    if (!page) {
      return array;
    }

    const page_number = page.number - 1;
    const page_size = page.size;

    if (!page || !page.size || !page.number) {
      return array;
    }

    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

}
