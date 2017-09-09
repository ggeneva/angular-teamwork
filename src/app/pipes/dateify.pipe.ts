import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateify'
})
export class DateifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const monthF = month < 10 ? '0' + month : month;
    const dayF = day < 10 ? '0' + day : day;
    const hoursF = hours < 10 ? '0' + hours : hours;
    const minutesF = minutes < 10 ? '0' + minutes : minutes;

    const resultDate = dayF + '.' + monthF + '.' + year + ' - ' + hoursF + ':' + minutesF;

    return resultDate;
  }

}
