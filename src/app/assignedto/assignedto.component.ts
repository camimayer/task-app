import { Component } from '@angular/core';
import { TasksService } from '../services/task/tasks.service';

@Component({
  selector: 'app-assignedto',
  templateUrl: './assignedto.component.html',
  styleUrl: './assignedto.component.scss'
})
export class AssignedtoComponent {
  tasks: any[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getAssignedTo()
      .subscribe(
        data => {
          this.tasks = data.allTasks;
        },
        error => {
          console.error('Error Create Task:', error);
        }
      );
  }
}
