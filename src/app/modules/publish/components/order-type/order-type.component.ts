import { Component, Input } from '@angular/core';
import { OrderTypeView } from '../../models/seven-step-form.model';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.scss'],
})
export class OrderTypeComponent {
  @Input() orderType!: OrderTypeView;


}
