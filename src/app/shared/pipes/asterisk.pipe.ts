import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisk'
})
export class AsteriskPipe implements PipeTransform {

  transform(value: any, required: boolean): string {
    if(required) {
      return value + "*";
    }
    return value;
  }

}
