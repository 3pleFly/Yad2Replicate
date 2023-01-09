import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress"
      [ngClass]="bgColorCssClass"
      [ngStyle]="{ width: progressBarWidth }"
    ></div>
    <span class="progress_bar_text">
      <p>
        {{ progressBarText }}
      </p>
    </span>
  `,
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  progressBarText: string = 'ממליצים לך בחום להוסיף תיאור';
  private _progress!: number;

  @Input() set progress(value: number) {
    this._progress = value;
    this.setProgressBarText(this._progress);
  }

  @Input() progressDivider: number = 1.5;

  get progressBarWidth() {
    return this.progress / this.progressDivider + '%';
  }

  get progress(): number {
    return this._progress;
  }

  get bgColorCssClass(): string {
    if (this.progress < 31) return 'redBg';
    if (this.progress >= 31 && this.progress < 60) return 'orangeBg';
    if (this.progress >= 60 && this.progress < 100) return 'brightOrangeBg';
    if (this.progress >= 100 && this.progress < 130) return 'brightGreenBg';
    return 'greenBg';
  }

  setProgressBarText(value: number) {
    if (!value) {
      this.progressBarText = 'ממליצים לך בחום להוסיף תיאור';
      return;
    }
    if (value < 31) {
      this.progressBarText = 'מרגיש לנו שהטקסט שכתבת קצר מידי';
      return;
    }
    if (value >= 31 && value < 60) {
      this.progressBarText = 'יופי, המודעה הולכת לכיוון נכון';
      return;
    }
    if (value >= 60 && value < 100) {
      this.progressBarText = 'עוד ממש קצת וזה שם';
      return;
    }
    if (value >= 100 && value < 130) {
      this.progressBarText = 'אוטוטו';
    }
    this.progressBarText = 'בול!';
  }
}
