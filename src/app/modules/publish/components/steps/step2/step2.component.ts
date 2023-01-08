import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
import { Yad2Asset } from 'src/app/shared/models/yad2Assets.const';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  SevenStepsFormData,
  SevenStepViewModel,
} from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit, OnDestroy {
  form = this.fb.group({
    propertyState: '',
    city: '',
    street: { value: '', disabled: true },
    houseNum: { value: '', disabled: true },
    neighborhood: { value: '', disabled: true },
    area: { value: '', disabled: true },
    floor: { value: '', disabled: true },
    totalFloors: { value: '', disabled: true },
    isOnColumns: { value: '', disabled: true },
    propertyType: this.fb.control<Yad2Asset | null>(null),
  });
  private cityKeyword$ = new Subject<string>();
  private streetKeyword$ = new Subject<string>();
  cityData$!: Observable<string[]>;
  streetsData$!: Observable<string[]>;
  isCitiesLoading: boolean = false;
  isStreetsLoading: boolean = false;
  cityValueChanges!: Subscription;
  streetValueChanges!: Subscription;

  @Input() viewModel!: SevenStepViewModel;
  @Output() formReady = of(this.form);
  @Output()
  valueChange = defer(() =>
    this.form.valueChanges.pipe(
      map(
        (v): Partial<SevenStepsFormData> => ({
          propertyType: v.propertyType ?? null,
          propertyState: v.propertyState ?? '',
          city: v.city ?? '',
          street: v.street ?? '',
          houseNum: v.houseNum ?? '',
          neighborhood: v.neighborhood ?? '',
          area: v.area ?? '',
        })
      )
    )
  );

  constructor(
    private fb: FormBuilder,
    private stepsService: StepsService,
    private apiService: ApiService
  ) {}

  ngOnDestroy(): void {
    this.cityValueChanges.unsubscribe();
    this.streetValueChanges.unsubscribe();
  }

  ngOnInit(): void {


    this.cityData$ = this.cityKeyword$.pipe(
      debounceTime(700),
      switchMap((keyword) =>
        this.apiService.autoCompleteByFieldAndQuery('שם_ישוב', keyword)
      ),
      tap((v) => {
        this.isCitiesLoading = false;
      })
    );

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

    this.stepsService
      .getInitialForm()
      .pipe(take(1))
      .subscribe((formData) => {
        this.form.patchValue({
          propertyType: formData.propertyType,
          propertyState: formData.propertyState,
          city: formData.city,
          street: formData.street,
          houseNum: formData.houseNum,
          neighborhood: formData.neighborhood,
          area: formData.area,
        });
      });
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
}
