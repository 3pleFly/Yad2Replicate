import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

export const TooltipIcons = {
  LIGHTBULB: 'LIGHTBULB',
  MEGAPHONE: 'MEGAPHONE',
  TIME: 'TIME',
} as const;
@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip_wrapper">
      <ng-container [ngSwitch]="icon">
        <img
          *ngSwitchCase="TooltipIcons.TIME"
          src="assets/images/publish/time_is_money.png"
        />
        <img
          *ngSwitchCase="TooltipIcons.LIGHTBULB"
          src="assets/images/publish/lightbulb.png"
        />
        <img
          *ngSwitchCase="TooltipIcons.MEGAPHONE"
          src="assets/images/publish/megaphone.png"
        />
      </ng-container>
      <div class="tooltip_content">
        <ng-container [ngTemplateOutlet]="tooltipTextView ?? defaultView">
        </ng-container>
      </div>
    </div>

    <ng-template #defaultView>
      <h5>הזמן שלך יקר לנו!</h5>
      <span>על פי מחקר אונ' ת"א עם מודעה משודרגת מוכרים מהר יותר </span>
    </ng-template>
  `,
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @ContentChild('tooltipTextView') tooltipTextView?: TemplateRef<any>;
  @Input() icon!: keyof typeof TooltipIcons;

  get TooltipIcons() {
    return TooltipIcons;
  }
}
