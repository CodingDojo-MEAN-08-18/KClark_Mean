import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { Note } from '../models';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private readonly base = '/api/notes/';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    console.log('grabbing notes');
    return this.http.get<Note[]>(this.base);
  }

  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(this.base + id);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.base, note);
  }
}
