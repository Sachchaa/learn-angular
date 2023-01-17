import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  template: `
    <div [ngClass] ="{reminder: task.reminder}" class="task" (dblclick)="onToggle(task)">
      <h3>{{ task.text}}<fa-icon [icon]="faTimes" [ngStyle]="{'color': 'red'}" (click)="onDelete(task)"></fa-icon></h3>
      <p>{{ task.day}}</p>
    </div>
  `,
  styles:[`
    .task {
      background: #f4f4f4;
      margin: 5px;
      padding: 10px 20px;
      cursor: pointer;
    }
    .task.reminder {
        border-left: 5px solid green;
    }
    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
  `]
})

export class TaskItemComponent implements OnInit {
  constructor() {}

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task) {
    this.onToggleReminder.emit(task)
  }

  ngOnInit(): void {
  }

}
