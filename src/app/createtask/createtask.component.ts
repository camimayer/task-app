import { Component } from '@angular/core';
import { TasksService } from '../services/task/tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.scss'
})
export class CreatetaskComponent {
  taskForm: FormGroup;
  submitted = false;
  error = '';

  constructor(private taskService: TasksService, private formBuilder: FormBuilder, private router: Router) {
    this.taskForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      assignedToUid: ['', [Validators.required]]
    });
  }

  get formControls() { return this.taskForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.taskForm.invalid) {
      return;
    }

    this.taskService.create(this.taskForm.value.description, this.taskForm.value.assignedToUid)
      .subscribe(
        data => {
          console.log('Task Created successfully', data);
          this.router.navigate(['/createdby']);
        },
        error => {
          console.error('Error Create Task:', error);
        }
      );
  }
}
