import { Injectable } from '@angular/core';
import { Yad2Assets } from 'src/app/shared/models/Yad2Assets.enum';
import { Step } from '../models/step.model';

@Injectable()
export class SevenstepService {
  private _steps!: Step[];
  private _selectedAsset: Yad2Assets = Yad2Assets.GENERAL;
  private _activeStage: number = 0;

  constructor() {
    this.initializeSteps();
  }

  resetSteps() {
    this.initializeSteps();
  }

  get activeStage(): number {
    return this._activeStage;
  }

  set activeStage(value: number) {
    this._activeStage = value;
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

  private initializeSteps() {
    this._steps = [
      new Step(),
      new Step(),
      new Step(),
      new Step(),
      new Step(),
      new Step(),
      new Step(),
    ];
    this._steps[0].fields = [];
    this._activeStage = 0;
  }
}
