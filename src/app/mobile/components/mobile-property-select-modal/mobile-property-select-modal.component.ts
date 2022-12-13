import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CheckBoxItem } from 'src/app/shared/models/inner.models';

@Component({
  selector: 'app-mobile-property-select-modal',
  templateUrl: './mobile-property-select-modal.component.html',
  styleUrls: ['./mobile-property-select-modal.component.scss'],
})
export class MobilePropertySelectModalComponent implements OnInit {
  @Input() checkBoxItems!: CheckBoxItem[];
  @Input() showModal!: boolean;
  @Output() showModalChange = new EventEmitter<boolean>();

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.emitCloseModal();
  }

  ngOnInit(): void {}

  emitCloseModal(): void {
    this.showModalChange.emit(false);
  }
}
