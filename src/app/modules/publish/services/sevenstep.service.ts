import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormField, StepData } from '../models/step-data.model';
import { Yad2Assets } from 'src/app/shared/models/Yad2Assets.enum';

const field = { fieldName: '', fieldValue: '' };

const data = new StepData([field]);

@Injectable()
export class SevenstepService {
  private _steps: StepData[] = [data, data, data];
  private _selectedAsset: Yad2Assets = Yad2Assets.GENERAL;


  nextStep(data: FormField[]) {
    let newStep = new StepData(data);
    this._steps.push(newStep);
  }

  popStep() {
    this._steps.pop();
  }

  resetToStep(stepStage: number) {
    this.removeAfter(stepStage);
  }

  removeAfter(index: number) {
    while (this._steps.length != index) {
      this._steps.pop();
    }
  }

  clearAll() {
    this._steps = new Array();
  }

  get currentStage(): number {
    return this._steps.length;
  }

  get selectedAsset() {
    return this._selectedAsset;
  }

  set selectedAsset(asset: Yad2Assets) {
    this._selectedAsset = asset;
  }
}
