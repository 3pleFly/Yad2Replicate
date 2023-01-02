import { Component, Input, OnInit } from '@angular/core';
import { BoxDisplays } from 'src/app/shared/models/category-box.model';
import { CheckBoxItem } from 'src/app/shared/models/checkboxItem.model';
import { SevenstepService } from '../../services/sevenstep.service';
import {
  receiveEmailCommericalsCheckboxItem,
  onColumnsCheckboxItem,
} from 'src/assets/mock/data/mock.data';
import { Yad2Assets } from 'src/app/shared/models/yad2assets.enum';
import { _yad2AssetsArray } from 'src/assets/mock/data/mock.data';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-step2-view',
  templateUrl: './step2-view.component.html',
  styleUrls: ['./step2-view.component.scss'],
})
export class Step2ViewComponent implements OnInit {
  @Input() stepStage!: number;
  Yad2AssetsArray = _yad2AssetsArray;
  onColumnsCheckboxItem: CheckBoxItem = onColumnsCheckboxItem;
  receiveEmailCommericalsCheckboxItem: CheckBoxItem =
    receiveEmailCommericalsCheckboxItem;

  cityAutoComplete$!: Observable<string[]>;
  streetAutoComplete$!: Observable<string[]>;

  constructor(public stepsService: SevenstepService) {}

  ngOnInit(): void {
    this.onColumnsCheckboxItem.disabled = true;
    this.receiveEmailCommericalsCheckboxItem.disabled = true;
  }

  selectAsset(asset: Yad2Assets) {
    this.stepsService.selectedAsset = asset;
  }

  handleCityInput$(inputChanges$: Observable<string>) {
    this.cityAutoComplete$ = this.stepsService
      .autoCompleteCity(inputChanges$)
      .pipe(map((records) => records.map((r) => r.שם_ישוב)));
  }

  handleStreetInput$(inputChanges$: Observable<string>) {
    this.streetAutoComplete$ = this.stepsService
      .autoCompleteStreet(inputChanges$)
      .pipe(map((r) => r.map((r) => r.שם_רחוב)));
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
  }

  get BoxDisplays() {
    return BoxDisplays;
  }

  get showOnColumsCheckbox(): boolean {
    let typeOfAsset = this.stepsService.selectedAsset;
    if (
      typeOfAsset === Yad2Assets.GENERAL ||
      typeOfAsset === Yad2Assets.APARTMENT ||
      typeOfAsset === Yad2Assets.ROOF_OR_PENTHOUSE ||
      typeOfAsset === Yad2Assets.DUPLEX ||
      typeOfAsset === Yad2Assets.VACATION_APARTMENT ||
      typeOfAsset === Yad2Assets.TRIPLEX ||
      typeOfAsset === Yad2Assets.UNIT ||
      typeOfAsset === Yad2Assets.BUILDING ||
      typeOfAsset === Yad2Assets.STUDIO
    )
      return true;
    return false;
  }

  get showFloorInputs(): boolean {
    let asset = this.stepsService.selectedAsset;
    if (
      asset === Yad2Assets.LOT ||
      asset === Yad2Assets.TOWNHOUSE ||
      asset === Yad2Assets.AGRICULTURAL_FARM ||
      asset === Yad2Assets.AUXILIARY_FARM ||
      asset === Yad2Assets.PURCHASING_GROUP ||
      asset === Yad2Assets.PARKING ||
      asset === Yad2Assets.STORAGE ||
      asset === Yad2Assets.STUDIO
    )
      return false;
    return true;
  }

  get hideFloorInput(): boolean {
    let asset = this.stepsService.selectedAsset;
    if (asset !== Yad2Assets.BUILDING) return true;
    return false;
  }

  get showFloorIsRequired(): boolean {
    let asset = this.stepsService.selectedAsset;
    if (
      asset === Yad2Assets.GARDEN_APARTMENT ||
      asset === Yad2Assets.TRIPLEX ||
      asset === Yad2Assets.DUPLEX
    )
      return false;
    return true;
  }

  // get cityInputModel() {
  //   return this.stepsService.cityInputModel;
  // }
  // get streetInputModel() {
  //   return this.stepsService.streetInputModel;
  // }
  // get houseNumInputModel() {
  //   return this.stepsService.houseNumInputModel;
  // }
  // get floorInputModel() {
  //   return this.stepsService.floorInputModel;
  // }
  // get totalFloorsInputModel() {
  //   return this.stepsService.totalFloorsInputModel;
  // }
  // get neighborhoodInputModel() {
  //   return this.stepsService.neighborhoodInputModel;
  // }
  // get zoneInputModel() {
  //   return this.stepsService.zoneInputModel;
  // }

  setPropertyTypeInput(value: Yad2Assets): void {
    this.stepsService.form.propertyType = value;
  }

  setPropertyStateInput(value: string): void {
    this.stepsService.form.propertyState = value;
  }

  setCityInput(value: string): void {
    this.stepsService.form.city = value;
    if (value) {
      this.stepsService.streetInputModel.disabled = false;
    } else {
      this.stepsService.streetInputModel.disabled = true;
      this.stepsService.houseNumInputModel.disabled = true;
      this.stepsService.streetInputModel.value = "";
      this.stepsService.houseNumInputModel.value = "";
    }
  }

  setStreetInput(value: string): void {
    this.stepsService.form.street = value;
    if (value) {
      this.stepsService.houseNumInputModel.disabled = false;
    } else {
      this.stepsService.houseNumInputModel.disabled = true;
      this.stepsService.houseNumInputModel.value = "";
    }
  }

  setHouseNumberInput(value: string): void {
    this.stepsService.form.houseNum = value;
  }

  setFloorInput(value: string): void {
    this.stepsService.form.totalFloors = value;
  }

  setTotalFloorsInput(value: string): void {
    this.stepsService.form.totalFloors = value;
  }

  setOnColumnsCheckboxInput(value: string): void {
    this.stepsService.form.isOnColumns = value;
  }

  setNeighborhoodInput(value: string): void {
    this.stepsService.form.neighborhood = value;
  }

  setZoneInput(value: string): void {
    this.stepsService.form.zone = value;
  }
}
