import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent  {
  @Input() registrationMode: boolean = false;
  @Output() registrationModeChange = new EventEmitter<boolean>();

}
