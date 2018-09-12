import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';
import { MessageService } from './message.service';


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
    private http: HttpClient,
    private messageService: MessageService) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl).pipe(
      tap(tasks => this.log('fetched tasks')),
      catchError(this.handleError('getTasks', []))
    );
    this.messageService.add('TaskService: fetched tasks');
    return of(this.tasks);
  }

  getTaskNo404<Data>(id: string): Observable<Task> {
    const url = `${this.tasksUrl}/?id=${id}`;
    return this.http.get<Task[]>(url)
      .pipe(
        map(tasks => tasks[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} task id=${id}`);
        }),
        catchError(this.handleError<Task>(`getTask id=${id}`))
      );
  }

  getTask(id: string): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TaskService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }
}
