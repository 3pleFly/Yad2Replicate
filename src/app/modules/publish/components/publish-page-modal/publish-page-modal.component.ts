import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryBoxModel } from 'src/app/shared/models/category-box.model';

@Component({
  selector: 'app-publish-page-modal',
  templateUrl: './publish-page-modal.component.html',
  styleUrls: ['./publish-page-modal.component.scss'],
})
export class PublishPageModal implements OnInit {
  @Input() clickedCategory!: CategoryBoxModel;
  @Input() showPublishSelectionModal: boolean = false;
  @Output() showPublishSelectionModalChange = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    switch (this.clickedCategory.id) {
      default:
        this.router.navigate(['/publish/forsale']);
    }
    this.closePublishSelectionModal();
  }

  closePublishSelectionModal() {
    this.showPublishSelectionModalChange.emit(false);
  }
}
