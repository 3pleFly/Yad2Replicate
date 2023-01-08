import { Component, Input, OnInit, Output } from '@angular/core';
import { defer, map, Observable, of, startWith } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Yad2Asset } from 'src/app/shared/models/yad2Assets.const';

@Component({
  selector: 'app-step2-view',
  templateUrl: './step2-view.component.html',
  styleUrls: ['./step2-view.component.scss'],
})
export class Step2ViewComponent implements OnInit {


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}


}
