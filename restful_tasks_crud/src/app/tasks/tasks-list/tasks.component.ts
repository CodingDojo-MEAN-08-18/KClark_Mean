import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  // getTasks(): void {
  //   this.taskService.getTasks()
  //     .subscribe(tasks => this.tasks = tasks);
  // }

  onSelect(task: Task) {
    console.log('selecting ', task);

    this.selectedTask = this.selectedTask === task ? null : task;
  }

  onCreate(task: Task) {
    console.log('creating task', task);
    this.taskService.createTask(task).subscribe(createdTask => {
      this.tasks = [...this.tasks, createdTask];
    });
  }

  onRemove(task: Task) {
    console.log('removing task', task);
    this.taskService.removeTask(task.taskId).subscribe(removedTask => {
      this.tasks = this.tasks.filter(t => t.taskId !== removedTask.taskId);
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
    console.log('eventing');
  }
}
