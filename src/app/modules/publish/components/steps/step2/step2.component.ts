import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  of,
  defer,
  map,
  Observable,
  filter,
  take,
  tap,
  debounceTime,
  switchMap,
  Subject,
  Subscription,
} from 'rxjs';
import { YAD2_ASSET } from 'src/app/shared/models/yad2Assets.const';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  SevenStepsFormData,
  SevenStepViewModel,
} from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';
import { TooltipIcons } from '../../tooltip/tooltip.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit, OnDestroy {
  @Input() viewModel!: SevenStepViewModel;
  private cityKeyword$ = new Subject<string>();
  private streetKeyword$ = new Subject<string>();
  cityData$!: Observable<string[]>;
  streetsData$!: Observable<string[]>;
  isCitiesLoading: boolean = false;
  isStreetsLoading: boolean = false;
  city$!: Subscription;
  street$!: Subscription;
  propertyType$!: Subscription;

  constructor(
    private fb: FormBuilder,
    private stepsService: StepsService,
    private apiService: ApiService
  ) {}

  ngOnDestroy(): void {
    this.city$.unsubscribe();
    this.street$.unsubscribe();
    this.propertyType$.unsubscribe();
  }

  get form() {
    return this.stepsService.form;
  }

  ngOnInit(): void {
    this.viewModel.inputs.isOnColumns.disabled = true;

    // Enable or disable street && houseNum if city value.
    this.city$ = this.form.controls.city.valueChanges.subscribe((v) => {
      if (v) {
        this.viewModel.inputs.street.disabled = false;
        this.form.controls.houseNum.disable();
      } else {
        this.viewModel.inputs.street.disabled = true;
      }
    });

    // Enable or disable houseNum if street value.
    this.street$ = this.form.controls.street.valueChanges.subscribe((v) => {
      if (v) {
        this.form.controls.houseNum.enable();
      } else {
        this.form.controls.houseNum.disable();
      }
    });

    //Set form per property type.
    this.propertyType$ = this.form.controls.propertyType.valueChanges.subscribe(
      (v) => {
        if (!v) return;
        this.viewModel.inputs.isOnColumns.disabled = false;

        switch (v) {
          case YAD2_ASSET.LOT:
            this.viewModel.inputs.isOnColumns.visible = false;
            this.viewModel.inputs.floor.visible = false;
            this.viewModel.inputs.totalFloors.visible = false;
            break;

          case YAD2_ASSET.ROOF_OR_PENTHOUSE:
          case YAD2_ASSET.APARTMENT:
          case YAD2_ASSET.GENERAL:
          case YAD2_ASSET.STUDIO:
          case YAD2_ASSET.DUPLEX:
          case YAD2_ASSET.TRIPLEX:
          case YAD2_ASSET.UNIT:
            this.viewModel.inputs.floor.visible = true;
            this.viewModel.inputs.totalFloors.visible = true;
            this.viewModel.inputs.isOnColumns.visible = true;
            this.viewModel.inputs.isOnColumns.disabled = false;
            break;

          case YAD2_ASSET.STORAGE:
          case YAD2_ASSET.PURCHASING_GROUP:
          case YAD2_ASSET.PARKING:
          case YAD2_ASSET.TOWNHOUSE:
          case YAD2_ASSET.AGRICULTURAL_FARM:
          case YAD2_ASSET.AUXILIARY_FARM:
            this.viewModel.inputs.isOnColumns.visible = false;
            this.viewModel.inputs.floor.visible = false;
            this.viewModel.inputs.totalFloors.visible = false;
            break;

          case YAD2_ASSET.GARDEN_APARTMENT:
          case YAD2_ASSET.ASSISTED_LIVING:
          case YAD2_ASSET.BASEMENT:
            this.viewModel.inputs.isOnColumns.visible = false;
            this.viewModel.inputs.totalFloors.visible = true;
            this.viewModel.inputs.floor.visible = true;
            break;

          case YAD2_ASSET.BUILDING:
            this.viewModel.inputs.floor.visible = false;
            this.viewModel.inputs.isOnColumns.visible = true;
            this.viewModel.inputs.totalFloors.visible = true;
            break;

          case YAD2_ASSET.PRIVATE_HOUSE_OR_COTTEGE:
            this.viewModel.inputs.floor.visible = false;
            this.viewModel.inputs.isOnColumns.visible = false;
            this.viewModel.inputs.totalFloors.visible = true;
            break;
        }
      }
    );

    //City dropdown api call
    this.cityData$ = this.cityKeyword$.pipe(
      debounceTime(700),
      switchMap((keyword) =>
        this.apiService.autoCompleteByFieldAndQuery('שם_ישוב', keyword)
      ),
      tap((v) => {
        this.isCitiesLoading = false;
      })
    );

    //Street dropdown api call
    this.streetsData$ = this.streetKeyword$.pipe(
      debounceTime(700),
      switchMap((keyword) =>
        this.apiService.autoCompleteByFieldAndQuery(
          'שם_רחוב',
          this.form.controls.city.value + ',' + keyword
        )
      ),
      tap((v) => (this.isStreetsLoading = false))
    );
  }

  handleCityInputValues(keyword: string) {
    if (keyword.length > 2) {
      this.cityKeyword$.next(keyword);
      this.isCitiesLoading = true;
    }
  }

  handleStreetInputValues(keyword: string) {
    if (keyword.length > 2) {
      this.streetKeyword$.next(keyword);
      this.isStreetsLoading = true;
    }
  }

  get TooltipIcons() {
    return TooltipIcons;
  }
}
