import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-new',
  templateUrl: './tasks-new.component.html',
  styleUrls: ['./tasks-new.component.css']
})

export class TasksNewComponent implements OnInit {
  @Output()
  createTask = new EventEmitter<Task>();

  task = new Task();

  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router
  ) {}

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submitting form', this.task);

    this.taskService.createTask(this.task).subscribe(task => {
      this.task = new Task();
      form.reset();

      this.router.navigateByUrl('/');
    });
  }
}
