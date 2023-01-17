import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn" [ngStyle]="{'background-color': color}" (click)="onClick()">
      {{text}}
    </button>
  `
})

export class ButtonComponent {
  @Input() text!: string;
  @Input() color: string | undefined;
  @Output() btnClick = new EventEmitter()

  constructor() {}

  onClick() {
    this.btnClick.emit()
  }

}
