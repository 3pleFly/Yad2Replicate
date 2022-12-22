import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-publish-page-modal',
  templateUrl: './publish-page-modal.component.html',
  styleUrls: ['./publish-page-modal.component.scss'],
})
export class PublishPageModal {
  @Input() showPublishSelectionModal: boolean = false;
  @Output() showPublishSelectionModalChange = new EventEmitter<boolean>();

  constructor() {}

  closePublishSelectionModal() {
    this.showPublishSelectionModalChange.emit(false);
  }
}
