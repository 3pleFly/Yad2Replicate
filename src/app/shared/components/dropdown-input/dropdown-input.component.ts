import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { defer, fromEvent, Observable, of, Subscription } from 'rxjs';
import { InputView } from '../../models/viewmodels/input.model';

@Component({
  selector: 'app-dropdown-input',
  template: `
    <app-input
      [isLoading]="isLoading"
      [inputModel]="inputModel"
      [inputValue]="inputValue"
      (keyUpEvent)="emitOnSearch($event)"
    ></app-input>
    <ul [ngClass]="{ dropdown_list: true, list_active: data?.length }">
      <li
        class="dropdown_item"
        *ngFor="let item of data"
        (mousedown)="selectItem(item)"
      >
        <button class="naked-btn">
          <span innerHTML="{{ item | boldSubString : inputValue }}"> </span>
        </button>
      </li>
    </ul>
  `,
  styleUrls: ['./dropdown-input.component.scss'],
})
export class DropdownInputComponent implements OnInit {
  private isChildSelected: boolean = false;
  inputValue: string | null = null;
  @Input() isLoading: boolean = false;
  @Input() inputModel!: InputView;
  @Input() data?: string[] | null;
  @Input() control!: FormControl;
  @Output() itemSelectedEvent = new EventEmitter<string>();
  @Output() onSearch = new EventEmitter<string>();

  ngOnInit(): void {}

  @HostListener('focusout', ['$event'])
  clickOutsideCurrentPopup(e: Event) {
    this.clearInput();
  }

  emitOnSearch(value: string) {
    this.isChildSelected = false;
    this.inputValue = value;
    this.onSearch.emit(value);
  }

  selectItem(item: string) {
    this.data = null;
    this.isChildSelected = true;
    this.control.setValue(item);
    this.inputValue = item;
  }

  clearInput() {
    if (!this.isChildSelected) {
      this.inputValue = '';
      this.data = null;
      this.control.reset();
    }
  }
}
