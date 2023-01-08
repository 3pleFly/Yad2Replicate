import { Component } from '@angular/core';


@Component({
  selector: 'app-step4-view',
  templateUrl: './step4-view.component.html',
  styleUrls: ['./step4-view.component.scss']
})
export class Step4ViewComponent {



  get isMobileUser(): boolean {
    return screen.width < 880;
  }


}
