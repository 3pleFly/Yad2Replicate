import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() maxLength!: number;;
  @Input() placeholder: string = "";
  @Output() textAreaEnterCharEvent = new EventEmitter<string>();

  textArea: string = "";

  emitEnteredText() {
    this.textAreaEnterCharEvent.emit(this.textArea);
  }


}
