import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  {
  @Input() showModal!: boolean;
  @Output() showModalChange = new EventEmitter<boolean>();

  @ContentChild('closeBtnTemplate') closeBtnTemplate!: TemplateRef<any>;
  @ContentChild('iconTemplate') iconTemplate!: TemplateRef<any>;
  @ContentChild('buttonsTemplate') buttonsTemplate!: TemplateRef<any>;
  @ContentChild('dialogMessageTemplate') messageTemplate!: TemplateRef<any>;

  closeModal(): void {
    this.showModalChange.emit(false);
  }

  stopPropogation(e: Event): void {
    e.stopPropagation();
  }
}
