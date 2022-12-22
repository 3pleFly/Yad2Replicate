import { Component, Input } from '@angular/core';
import { logoSvg } from 'src/assets/images/images';

@Component({
  selector: 'app-publish-navbar',
  templateUrl: './publish-navbar.component.html',
  styleUrls: ['./publish-navbar.component.scss']
})
export class PublishNavbarComponent {

  @Input() logoImgSrc: string = logoSvg;
  @Input() user: string = 'פרדי היה פה';


}
