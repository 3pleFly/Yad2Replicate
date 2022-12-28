import { Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress"
      [ngClass]="bgColorCssClass"
      [ngStyle]="{ width: progressBarWidth }"
    ></div>
    <ng-container [ngTemplateOutlet]="progressBarTextTemplate"></ng-container>
  `,
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() progressPercentage!: number;
  @Input() progressBarPercentageDivider!: number;
  @ContentChild('progressBarTextTemplate') progressBarTextTemplate!: TemplateRef<any>;

  get progressBarWidth() {
    return this.progressPercentage / this.progressBarPercentageDivider + '%';
  }

  get bgColorCssClass(): string {
    if (this.progressPercentage < 31) return 'redBg';
    if (this.progressPercentage >= 31 && this.progressPercentage < 60)
      return 'orangeBg';
    if (this.progressPercentage >= 60 && this.progressPercentage < 100)
      return 'brightOrangeBg';
    if (this.progressPercentage >= 100 && this.progressPercentage < 130)
      return 'brightGreenBg';
    return 'greenBg';
  }
}

