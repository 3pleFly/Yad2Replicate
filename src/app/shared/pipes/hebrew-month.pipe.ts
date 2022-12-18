import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hebrewMonth',
})
export class HebrewMonthPipe implements PipeTransform {
  transform(month: number): string {
    switch (month) {
      case 0:
        return 'ינו';
      case 1:
        return 'פבר';
      case 2:
        return 'מרץ';
      case 3:
        return 'אפר';
      case 4:
        return 'מאי';
      case 5:
        return 'יונ';
      case 6:
        return 'יול';
      case 7:
        return 'אוג';
      case 8:
        return 'ספט';
      case 9:
        return 'אוק';
      case 10:
        return 'נוב';
      case 11:
        return 'דצמ';
    }
    return "חודש";
  }
}
