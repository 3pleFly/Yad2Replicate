import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,

} from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { InputViewModel } from '../../models/viewmodels/input-component.model';

@Component({
  selector: 'app-dropdown-input',
  template: `
    <app-input
      (changedInputValueEvent)="streamInputChanges($event)"
      [inputModel]="inputModel"
      [isLoading]="isLoading"
    ></app-input>
    <ul [ngClass]="{ dropdown_list: true, list_active: data?.length }">
      <li
        (mousedown)="emitDropdownItemAndClearData(item, $event)"
        class="dropdown_item"
        *ngFor="let item of data"
      >
        <button class="naked-btn">
          <span innerHTML="{{ item | boldSubString : inputModel.value }}"> </span>
        </button>
      </li>
    </ul>
  `,
  styleUrls: ['./dropdown-input.component.scss'],
})
export class DropdownInputComponent implements OnChanges {
  private _input$ = new BehaviorSubject<string>('');
  private isChildClicked: boolean = false;
  isLoading: boolean = false;
  @Input() inputModel: InputViewModel = {};
  @Input() data: string[] | null = null;
  @Output() itemSelectedEvent = new EventEmitter<string>();
  @Output() inputChanges$ = of(this._input$.asObservable());

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.isLoading = false;
    }
  }

  @HostListener('focusout', ['$event'])
  clickOutsideCurrentPopup(e: Event) {
    this.clearInput(e);
  }

  emitDropdownItemAndClearData(item: string, e: Event) {
    this.itemSelectedEvent.emit(item);
    this.inputModel.value = item;
    this.data = null;
    this.isChildClicked = true;
  }

  clearInput(e: Event) {
    if (!this.isChildClicked) {
      this.itemSelectedEvent.emit('');
      this.inputModel.value = '';
      this.data = null;
    }
  }

  streamInputChanges(value: string) {
    this.isChildClicked = false;
    this.data = null;
    if (value.length >= 2) {
      this.isLoading = true;
      this._input$.next(value);
    }
  }
}
