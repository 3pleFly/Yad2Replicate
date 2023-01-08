import { CategoryBoxModel } from 'src/app/shared/models/category-box.model';
import { Yad2Asset } from 'src/app/shared/models/yad2Assets.const';
import { sevenStepsModelData, Yad2InputsViewModels } from 'src/app/modules/publish/models/input.data';
import { Step1Component } from '../components/steps/step1/step1.component';
import { ObservedValueOf } from 'rxjs';
import { Step2Component } from '../components/steps/step2/step2.component';

export interface SevenStepsForm {
  step1?: ObservedValueOf<Step1Component['formReady']>
  step2?: ObservedValueOf<Step2Component['formReady']>
}

export interface SevenStepsFormData {
  category: CategoryBoxModel | null;
  propertyType: Yad2Asset | null;
  propertyState: string;
  city: string;
  street: string;
  houseNum: string;
  floor?: string;
  totalFloors?: string;
  neighborhood: string;
  area: string;
}


type SevenStepsInputViewModel = typeof Yad2InputsViewModels;

export type SevenStepsViewModels = typeof sevenStepsModelData

export interface SevenStepViewModel {
  title: string;
  collapasedTitle?: string;
  stepStage: number;
  inputs: SevenStepsInputViewModel;
}
