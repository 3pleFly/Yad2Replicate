import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MultiToggleBox } from '../../models/inner.models';

@Component({
  selector: 'app-select-type-page',
  templateUrl: './select-type-page.component.html',
  styleUrls: ['./select-type-page.component.scss'],
})
export class SelectTypePageComponent implements OnInit {
  @Input() items!: MultiToggleBox[];
  @Output() isSelectTypePageOpen: EventEmitter<boolean> = new EventEmitter(
    false
  );


  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.notifyToCloseSelectTypePage();
  }

  ngOnInit(): void {

  }

  notifyToCloseSelectTypePage(): void {
    this.isSelectTypePageOpen.emit(false);
  }

  toggleSubMultiSelect(element: HTMLElement) {
    element.classList.toggle('active');
  }

  checkBox(item: MultiToggleBox) {

  }
}
