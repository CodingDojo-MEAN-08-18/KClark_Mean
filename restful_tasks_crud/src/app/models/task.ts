import { stringify } from '@angular/compiler/src/util';

export class Task {
  taskId: string;
  title: string;
  description: string;
  completed: boolean;

  constructor() { }
}
