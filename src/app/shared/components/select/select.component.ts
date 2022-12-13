import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GovtApiAreaModel } from '../../models/govtApiAreaModel.model';
import { GovtAPIService } from '../../services/govt-api.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  data!: Observable<GovtApiAreaModel[]>;

  constructor(private govtApiService: GovtAPIService) {}

  ngOnInit(): void {
    this.data = this.govtApiService.getIsraeliAreasOfLiving();


  }

}
