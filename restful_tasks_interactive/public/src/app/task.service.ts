import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';

 const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 @Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  private tasksUrl = 'tasks';

  constructor(
    private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl).pipe(
      tap(tasks => console.log('fetched tasks'))
    );
  }
}
