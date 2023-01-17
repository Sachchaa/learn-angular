import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h2>{{title}}</h2>
      <app-button
        *ngIf="hasRoute('/')"
        color="{{ showAddTask ? 'red' : 'green' }}"
        text="{{ showAddTask ? 'Close' : 'Add' }}"
        (btnClick)="toggleAddTask()">
      </app-button>
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

export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription

  constructor(private uiService: UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
   this.uiService.toggleAddTask()
 }

 hasRoute(route: string) {
  return this.router.url === route
 }
}