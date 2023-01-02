import { Injectable } from '@angular/core';
import { Observable, debounceTime, filter, switchMap, tap } from 'rxjs';
import { SevenStepsForm } from 'src/app/shared/models/formField.model';
import {
  GovtDataStoreQueryParams,
  GovtDataStoreSearchResultRecords,
} from 'src/app/shared/models/govt-api.model';
import { InputViewModel } from 'src/app/shared/models/viewmodels/input-component.model';
import { Yad2Assets } from 'src/app/shared/models/yad2assets.enum';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable()
export class SevenstepService {
  public form: SevenStepsForm = new SevenStepsForm({});
  private _activeStage: number = 0;
  private _selectedAsset: Yad2Assets = Yad2Assets.GENERAL; //deprecated

  constructor(private apiService: ApiService) {}

  resetSteps() {
    this.form = new SevenStepsForm({});
    this._activeStage = 0;
    this._selectedAsset = Yad2Assets.GENERAL;
  }

  autoCompleteCity(
    inputChanges$: Observable<string>
  ): Observable<GovtDataStoreSearchResultRecords[]> {
    return inputChanges$.pipe(
      debounceTime(300),
      filter((str) => str.length >= 2),
      switchMap((str) => this.apiService.getCitiesByKeyword(str))
    );
  }

  autoCompleteStreet(
    inputChanges$: Observable<string>
  ): Observable<GovtDataStoreSearchResultRecords[]> {
    return inputChanges$.pipe(
      debounceTime(300),
      filter((str) => str.length >= 2),
      switchMap((streetKeyword) => {
        if (!this.form.city)
          throw new Error('Cannot fetch streets without city!');

        let query: string = JSON.stringify({
          שם_ישוב: this.form.city.trim() + ':*',
          שם_רחוב: streetKeyword + ':*',
        });

        return this.apiService.getStreetsByCityAndKeyword(query);
      })
    );
  }

  get activeStage(): number {
    return this._activeStage;
  }

  get selectedAsset() {
    return this._selectedAsset;
  }

  set activeStage(value: number) {
    this._activeStage = value;
  }

  set selectedAsset(asset: Yad2Assets) {
    this._selectedAsset = asset;
  }

  cityInputModel: InputViewModel = {
    labelText: 'ישוב*',
    placeholder: 'איפה נמצא הנכס?',
    value: '',
  };

  streetInputModel: InputViewModel = {
    labelText: 'רחוב',
    disabled: true,
    placeholder: 'הכנסת שם הרחוב',
  };

  houseNumInputModel: InputViewModel = {
    disabled: true,
    labelText: "מס' בית",
  };

  floorInputModel: InputViewModel = {
    disabled: true,
    placeholder: 'הכנסת מספר קומה',
    labelText: 'קומה*',
  };

  totalFloorsInputModel: InputViewModel = {
    disabled: true,
    placeholder: 'הכנסת סה״כ קומות',
    labelText: 'סה״כ קומות בבניין*',
  };

  neighborhoodInputModel: InputViewModel = {
    disabled: true,
    labelText: 'שכונה',
  };

  zoneInputModel: InputViewModel = {
    disabled: true,
    labelText: 'אזור מכירה',
  };
}
