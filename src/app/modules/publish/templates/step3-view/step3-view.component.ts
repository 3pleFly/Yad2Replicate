import { Component } from '@angular/core';
import { SwitcherTypes } from 'src/app/shared/components/switcher/switcher.component';
import { Yad2Properties } from 'src/app/shared/models/yad2Properties.model';
import { numberOfRoomsSelectOptions } from 'src/assets/mock/data/mock.data';
import { yad2Properties } from 'src/assets/mock/data/mock.data';
import { SevenstepService } from '../../services/sevenstep.service';

@Component({
  selector: 'app-step3-view',
  templateUrl: './step3-view.component.html',
  styleUrls: ['./step3-view.component.scss'],
})
export class Step3ViewComponent {
  numberOfRoomsSelectOptions = numberOfRoomsSelectOptions;
  yad2Properties: Yad2Properties[] = yad2Properties;
  textAreaCountOfChars: number = 0;
  _progressBarText: string = 'ממליצים לך בחום להוסיף תיאור';

  constructor(private stepsService: SevenstepService) {}

  setTextAreaString(textAreaString: string) {
    this.textAreaCountOfChars = textAreaString.length;
    this.setProgressBarText(textAreaString.length);
  }

  setProgressBarText(value: number) {
    if (!value) {
      this._progressBarText = 'ממליצים לך בחום להוסיף תיאור';
      return;
    }
    if (value < 31) {
      this._progressBarText = 'מרגיש לנו שהטקסט שכתבת קצר מידי';
      return;
    }
    if (value >= 31 && value < 60) {
      this._progressBarText = 'יופי, המודעה הולכת לכיוון נכון';
      return;
    }
    if (value >= 60 && value < 100) {
      this._progressBarText = 'עוד ממש קצת וזה שם';
      return;
    }
    if (value >= 100 && value < 130) {
      this._progressBarText = 'אוטוטו';
      return;
    }
    this._progressBarText = 'בול!';
  }

  nextStep() {
    this.stepsService.activeStage += 1;
  }

  prevStep() {
    this.stepsService.activeStage -= 1;
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
  }

  get progressBarText() {
    return this._progressBarText;
  }

  get SwitcherTypes() {
    return SwitcherTypes;
  }
}
