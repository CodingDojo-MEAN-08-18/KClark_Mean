import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';
import { map, switchMap } from 'rxjs/operators';

import { TaskService } from '../../services';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input()
  task: Task;

  constructor(
    private readonly taskService: TaskService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.paramMap.pipe(
      map(params => params.get('taskId')),
      switchMap(taskId => this.taskService.getTask(taskId))
    ).subscribe(task => (this.task = task));
  }
}
