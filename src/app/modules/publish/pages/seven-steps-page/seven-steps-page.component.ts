import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/shared/services/mock-data.service';

@Component({
  selector: 'app-seven-steps-page',
  templateUrl: './seven-steps-page.component.html',
  styleUrls: ['./seven-steps-page.component.scss']
})

export class SevenStepsPageComponent implements OnInit {

  constructor(public mockdataService: MockDataService) {}

  ngOnInit(): void {

  }



}
