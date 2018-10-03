import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Author } from '../models';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private readonly base = '/api/authors/';

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    console.log('grabbing authors');
    return this.http.get<Author[]>(this.base);
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(this.base + id);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.base, author);
  }

  removeAuthor(id: number): Observable<Author> {
    return this.http.delete<Author>(this.base + id);
  }
}
