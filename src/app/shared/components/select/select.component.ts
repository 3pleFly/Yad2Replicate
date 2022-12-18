import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GovtApiAreaModel } from '../../models/govtApiAreaModel.model';
import { GovtAPIService } from '../../services/govt-api.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

  @Input() data$!: Observable<string[]>;
  @Input() data!: string[];
  @Input() labelName!: string;
  @Input() width!: string;


}
