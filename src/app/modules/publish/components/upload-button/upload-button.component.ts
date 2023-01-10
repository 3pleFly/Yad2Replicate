import { Component, EventEmitter, Input } from '@angular/core';

export const UploadButtonType = {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
} as const;

@Component({
  selector: 'app-upload-button',
  template: `
    <main>
      <header class="header_title" *ngIf="title">
        <h4>{{ title }}</h4>
      </header>

      <label class="body">
        <ng-container [ngSwitch]="uploadType">
          <ng-container *ngSwitchCase="UploadButtonType.VIDEO">
            <img
              src="assets/images/publish/upload-video-icon.png"
              alt="upload video"
            />
            <span>העלאת סרטון</span>
          </ng-container>

          <ng-container *ngSwitchCase="UploadButtonType.IMAGE">
            <img
              src="assets/images/publish/add-image-icon.png"
              alt="upload image"
            />
            <span>העלאת תמונה</span>
            <input
              type="file"
              (change)="emitFile($event)"
              hidden
            />
          </ng-container>
        </ng-container>
      </label>
    </main>
  `,
  styleUrls: ['./upload-button.component.scss'],
})
export class UploadButtonComponent {
  @Input() uploadType: keyof typeof UploadButtonType = UploadButtonType.IMAGE;
  @Input() title!: string;
  fileUploadedEvent = new EventEmitter<File>();

  get UploadButtonType() {
    return UploadButtonType;
  }

  emitFile(e: any) {
    let file: FileList = e.target.files;
    this.fileUploadedEvent.emit(file[0]);
  }
}
