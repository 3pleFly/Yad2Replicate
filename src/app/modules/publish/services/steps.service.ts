import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { YAD2_ASSET } from 'src/app/shared/models/yad2Assets.const';
import { SevenStepsFormData } from '../models/seven-step-form.model';

@Injectable()
export class StepsService implements OnDestroy {
  public form = this.fb.group({
    propertyState: '',
    city: '',
    street: '',
    houseNum: { value: '', disabled: true },
    neighborhood: { value: '', disabled: true },
    area: { value: '', disabled: true },
    floor: { value: '', disabled: true },
    totalFloors: { value: '', disabled: true },
    isOnColumns: { value: '' },
    propertyType: this.fb.control<YAD2_ASSET | null>(null),
    rooms: '',
    description: '',
    parkingCount: this.fb.control<string | null>(null),
    balconyCount: this.fb.control<string | null>(null),
    propertyFeatures: this.fb.control<string[] | null>(null),
    numberOfPayments: '',
    houseCommittee: '',
    propertyTax: '',
    squareMeter: '',
    gardenSquareMeter: '',
    totalSquareMeter: '',
    price: '',
    entryDate: '',
    isImmediateEntry: '',
    isFlexible: '',
    isLongTerm: '',
    contactName: '',
    contactPhoneNumber: '',
    secondContactName: '',
    secondContactPhoneNumber: '',
    email: '',
    agreeToTermsAndConditions: '',
    useVirtualNumber: '',
    receiveCallsOnWeekends: '',

  });

  propertyType$ = this.form.controls.propertyType.valueChanges.subscribe(
    (v) => {
      if (!v) return;
      this.form.controls.isOnColumns.reset();
      this.form.controls.floor.reset();
      this.form.controls.totalFloors.reset();

      switch (v) {
        case YAD2_ASSET.ROOF_OR_PENTHOUSE:
        case YAD2_ASSET.APARTMENT:
        case YAD2_ASSET.GENERAL:
        case YAD2_ASSET.STUDIO:
        case YAD2_ASSET.DUPLEX:
        case YAD2_ASSET.TRIPLEX:
        case YAD2_ASSET.UNIT:
          this.form.controls.floor.enable();
          this.form.controls.isOnColumns.enable();
          this.form.controls.totalFloors.enable();
          break;

        case YAD2_ASSET.STORAGE:
        case YAD2_ASSET.PURCHASING_GROUP:
        case YAD2_ASSET.PARKING:
        case YAD2_ASSET.TOWNHOUSE:
        case YAD2_ASSET.AGRICULTURAL_FARM:
        case YAD2_ASSET.AUXILIARY_FARM:
          this.form.controls.floor.disable();
          this.form.controls.totalFloors.disable();
          this.form.controls.isOnColumns.disable();
          break;

        case YAD2_ASSET.GARDEN_APARTMENT:
        case YAD2_ASSET.ASSISTED_LIVING:
        case YAD2_ASSET.BASEMENT:
          this.form.controls.isOnColumns.disable();
          this.form.controls.floor.enable();
          this.form.controls.totalFloors.enable();
          break;

        case YAD2_ASSET.BUILDING:
          this.form.controls.floor.disable();
          this.form.controls.isOnColumns.enable();
          this.form.controls.totalFloors.enable();
          break;

        case YAD2_ASSET.PRIVATE_HOUSE_OR_COTTEGE:
          this.form.controls.floor.disable();
          this.form.controls.isOnColumns.disable();
          this.form.controls.totalFloors.enable();
          break;
      }
    }
  );

  private _activeStep$ = new BehaviorSubject<number>(6);
  public activeStep$ = this._activeStep$.asObservable();

  constructor(private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.propertyType$.unsubscribe();
  }

  nextStep() {
    this._activeStep$.next(this._activeStep$.getValue() + 1);
  }

  prevStep() {
    this._activeStep$.next(this._activeStep$.getValue() - 1);
  }
}
