import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h2>{{title}}</h2>
      <app-button color="green" text="Add" (btnClick)="toggleAddTask()"></app-button>
    </header>
`,
  styles:[`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  `]
})

export class HeaderComponent {
  title: string = 'Task Tracker';

  constructor() {}

  toggleAddTask() {
    console.log('toggled')
 }
}