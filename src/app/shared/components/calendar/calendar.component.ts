import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { logoSvg } from 'src/assets/images/images';
import { CalendarDate } from '../../models/calendar.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  month!: number;
  year!: number;
  monthDates!: CalendarDate[];
  prevSelectedDate!: CalendarDate;
  @Output() selectedDateEvent: EventEmitter<CalendarDate> = new EventEmitter<CalendarDate>();

  ngOnInit(): void {
    this.setInitialDates();
    this.setDatesOfMonth();
  }

  setInitialDates() {
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
  }

  private setDatesOfMonth() {
    this.monthDates = [];
    let date = new Date(this.year, this.month, 1);
    while (date.getMonth() === this.month) {
      this.monthDates.push({ date: new Date(date), selected: false });
      date.setDate(date.getDate() + 1);
    }
  }

  getMonthStartingDay(month: number, year: number): number {
    return new Date(year, month, 1).getDay();
  }

  nextYear() {
    this.year++;
    this.setDatesOfMonth();
  }

  prevYear() {
    this.year--;
    this.setDatesOfMonth();
  }

  nextMonth() {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.setDatesOfMonth();
  }

  prevMonth() {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.setDatesOfMonth();
  }

  getBlankDaysArray(): number[] {
    let startingDay = this.getMonthStartingDay(this.month, this.year);
    let blanksArr: number[] = [];
    for (let i = 1; i <= startingDay; i++) {
      blanksArr.push(i);
    }
    return blanksArr;
  }

  selectDate(date: CalendarDate) {
    if (this.isDateUntilToday(date.date)) return;
    if (this.prevSelectedDate) {
      this.prevSelectedDate.selected = false;
    }
    date.selected = true;
    this.prevSelectedDate = date;
    this.selectedDateEvent.emit(date);
  }

  markCellAsSelected() {}

  isDateUntilToday(date: Date): boolean {
    if (date.getDate() === this.today.getDate()) return false;
    if (date > this.today) {
      return false;
    }
    return true;
  }

  get today() {
    return new Date();
  }

  get isMonthBeforeCurrent(): boolean {
    if (
      this.year <= this.today.getFullYear() &&
      this.month <= this.today.getMonth()
    ) {
      return true;
    }
    return false;
  }
}
