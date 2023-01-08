import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldSubString',
})
export class BoldSubStringPipe implements PipeTransform {

  transform(value: any, args: any): any {
    let regEx = new RegExp(args, 'gi');
    return value.replace(regEx, '<strong>$&</strong>');
  }
}
