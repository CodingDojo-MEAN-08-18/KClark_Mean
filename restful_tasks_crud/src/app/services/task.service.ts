import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { Task } from '../models';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private readonly base = '/api/tasks/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    console.log('fetching list of Tasks');
    return this.http.get<Task[]>(this.base);
  }

  getTask(id: string): Observable<Task> {
    console.log('Found one task id:', id);
    return this.http.get<Task>(this.base + id);
  }

  createTask(task: Task): Observable<Task> {
    console.log('Creating task');
    return this.http.post<Task>(this.base, task);
  }

  removeTask(id: string): Observable<Task> {
    console.log('Removing task id:', id);
    return this.http.delete<Task>(this.base + id);
  }
}
