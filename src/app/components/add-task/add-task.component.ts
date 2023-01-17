import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  template: `
    <form *ngIf="showAddTask" class='add-form' (ngSubmit)="onSubmit()">
      <div class="form-control">
        <label>Task</label>
        <input type="text" name="text" [(ngModel)]="text" id="text" placeholder="Add Task"/>
      </div>
      <div class="form-control">
        <label>Day & Time</label>
        <input type="text" name="day" [(ngModel)]="day" id="day" placeholder="Add Day & Time"/>
      </div>
      <div class="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" name="reminder" [(ngModel)]="reminder" id="reminder"/>
      </div>
      <input type="submit" value="Save Task" class="btn btn-block"/>
    </form>
  `,
  styles:[`
    .add-form {
      margin-bottom: 40px;
    }
  `]
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text!: string
  day!: string
  reminder: boolean = false
  showAddTask!: boolean
  subscription: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
