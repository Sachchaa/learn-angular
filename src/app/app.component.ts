import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-header></app-header>
      <app-tasks></app-tasks>
    </div>
  `,
})
export class AppComponent {
}
