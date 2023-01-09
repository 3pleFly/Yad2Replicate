import { Component, Input, OnInit } from '@angular/core';
import { SwitcherTypes } from 'src/app/shared/components/switcher/switcher.component';
import { _yad2Properties } from 'src/assets/mock/data/mock.data';
import { SevenStepViewModel } from '../../../models/seven-step-form.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  @Input() viewModel!: SevenStepViewModel;
  yad2Properties = _yad2Properties;
  propertyDescriptionProgress: number = 0;

  constructor(private stepsService: StepsService) {}

  get form() {
    return this.stepsService.form;
  }

  ngOnInit(): void {}

  handleEnteredPropertyDescription(textAreaString: string) {
    this.propertyDescriptionProgress = textAreaString.length;
    this.form.controls.description.setValue(textAreaString);
  }

  selectParking(value: string) {
    if (value === 'ללא') this.form.controls.parkingCount.setValue(null);
    this.form.controls.parkingCount.setValue(value);
  }

  selectBalcony(value: string) {
    if (value === 'ללא') this.form.controls.balconyCount.setValue(null);
    this.form.controls.balconyCount.setValue(value);
  }

  selectYad2Properties(value: string[]) {
    this.form.controls.propertyFeatures.setValue(value);
  }

  get SwitcherTypes() {
    return SwitcherTypes;
  }
}
