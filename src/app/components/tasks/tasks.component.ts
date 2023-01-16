import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  template: `
    <app-task-item *ngFor="let task of tasks" [task]="task" (onDeleteTask)="deleteTask(task)"></app-task-item>
  `,
})
export class TasksComponent implements OnInit{

  tasks: Task[] = []

  constructor (private taskService: TaskService) {}

  //render the tasks from the service
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }

  //delete the selected task
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }

}
