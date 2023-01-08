import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SevenStepsFormData } from '../models/seven-step-form.model';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  private _formData = new BehaviorSubject<SevenStepsFormData>({
    category: null,
    propertyType: null,
    propertyState: '',
    city: '',
    street: '',
    houseNum: '',
    neighborhood: '',
    area: '',
  });

  private _activeStep$ = new BehaviorSubject<number>(1);
  public activeStep$ = this._activeStep$.asObservable();

  constructor() {}

  nextStep() {
    this._activeStep$.next(this._activeStep$.getValue() + 1);
  }

  prevStep() {
    this._activeStep$.next(this._activeStep$.getValue() - 1);
  }

  updateFormData(formData: SevenStepsFormData) {
    this._formData.next({...this._formData.getValue(), ...formData});
  }

  getInitialForm(): Observable<SevenStepsFormData> {
    return this._formData.asObservable();
  }
}
