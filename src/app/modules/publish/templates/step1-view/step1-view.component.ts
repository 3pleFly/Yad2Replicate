import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CategoryBoxModel,
  BoxDisplays,
} from 'src/app/shared/models/category-box.model';
import { MockDataService } from 'src/app/shared/services/mock-data.service';
import { SevenstepService } from '../../services/sevenstep.service';

@Component({
  selector: 'app-step1-view',
  templateUrl: './step1-view.component.html',
  styleUrls: ['./step1-view.component.scss'],
})
export class Step1ViewComponent {
  categories$!: Observable<CategoryBoxModel[]>;

  constructor(
    private mockDataService: MockDataService,
    private sevenStepsService: SevenstepService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.mockDataService.getForsaleSubCategories();
  }

  get BoxDisplays() {
    return BoxDisplays;
  }

  nextStep() {
    let formfield = { fieldName: 'a', fieldValue: '12' };
    this.sevenStepsService.nextStep([formfield]);
  }

  get isMobileUser(): boolean {
    return screen.width < 880;
  }
}
