import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface ModalTemplatesModel {
  messageTemplate: TemplateRef<any>
  actionButtonsTemplate: TemplateRef<any>;
  closeButtonTemplate?: TemplateRef<any>;
  iconTemplate?: TemplateRef<any>;
}
