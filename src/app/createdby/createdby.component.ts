import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/task/tasks.service';

@Component({
  selector: 'app-createdby',
  templateUrl: './createdby.component.html',
  styleUrl: './createdby.component.scss'
})
export class CreatedbyComponent implements OnInit{
  tasks: any[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getCreatedBy()
      .subscribe(
        data => {
          this.tasks = data.allTasks;
        },
        error => {
          console.error('Error on featching Task:', error);
        }
      );
  }
}

