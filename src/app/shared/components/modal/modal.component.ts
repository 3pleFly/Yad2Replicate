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
  template: `
    <div
      [ngClass]="{ backdrop: true, 'backdrop-visible': showModal }"
      (click)="closeModal()"
    >
      <div
        [ngClass]="{ 'modal-box': true, 'modal-box-active': showModal }"
        (click)="stopPropogation($event)"
      >
        <div class="content">
          <ng-container [ngTemplateOutlet]="closeBtnTemplate"></ng-container>
          <ng-container [ngTemplateOutlet]="iconTemplate"></ng-container>
          <ng-container [ngTemplateOutlet]="messageTemplate"></ng-container>
          <ng-container [ngTemplateOutlet]="buttonsTemplate"></ng-container>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
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
