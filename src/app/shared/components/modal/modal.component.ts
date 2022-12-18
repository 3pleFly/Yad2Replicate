import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModel } from '../../models/inner.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() promptMessage!: string;
  @Input() primaryButtonFunc!: ButtonModel;
  @Input() secondaryButtonFunc!: ButtonModel;
  @Input() showModal!: boolean;
  @Output() showModalChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  closeModal(): void {
    this.showModalChange.emit(false);
  }

  stopPropogation(e: Event): void {
    e.stopPropagation();
  }
}
