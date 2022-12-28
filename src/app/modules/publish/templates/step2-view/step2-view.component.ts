import { Component, Input, OnInit } from '@angular/core';
import { BoxDisplays } from 'src/app/shared/models/category-box.model';
import { CheckBoxItem } from 'src/app/shared/models/checkboxItem.model';
import { SevenstepService } from '../../services/sevenstep.service';
import {
  receiveEmailCommericalsCheckboxItem,
  onColumnsCheckboxItem,
} from 'src/assets/mock/data/mock.data';
import { Yad2Assets } from 'src/app/shared/models/Yad2Assets.enum';
import { yad2AssetsArray } from 'src/assets/mock/data/mock.data';

@Component({
  selector: 'app-step2-view',
  templateUrl: './step2-view.component.html',
  styleUrls: ['./step2-view.component.scss'],
})
export class Step2ViewComponent implements OnInit {
  @Input() stepStage!: number;
  Yad2AssetsArray = yad2AssetsArray;
  onColumnsCheckboxItem: CheckBoxItem = onColumnsCheckboxItem;
  receiveEmailCommericalsCheckboxItem: CheckBoxItem =
    receiveEmailCommericalsCheckboxItem;

  constructor(private stepsService: SevenstepService) {}

  ngOnInit(): void {
    this.onColumnsCheckboxItem.disabled = true;
    this.receiveEmailCommericalsCheckboxItem.disabled = true;
  }

  nextStep() {
    let formfield = { fieldName: 'a', fieldValue: '12' };
    this.stepsService.nextStep([formfield]);
  }

  prevStep() {
    this.stepsService.popStep();
  }

  selectAsset(asset: Yad2Assets) {
    this.stepsService.selectedAsset = asset;
  }

  get BoxDisplays() {
    return BoxDisplays;
  }

  get isExpandedView() {
    return this.stepsService.currentStage === this.stepStage - 1;
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
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

}
