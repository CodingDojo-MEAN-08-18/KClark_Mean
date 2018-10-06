import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from '../../models/author';
import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent {
  errors: string[] = [];
  author = new Author();

  constructor(
    private readonly authorService: AuthorService,
    private readonly router: Router
  ) { }

  createAuthor(author: Author) {
    event.preventDefault();

    console.log('submitting form', author);
    this.authorService.createAuthor(author).subscribe(
      () => {
        this.router.navigateByUrl('authors');
      },
      error => {
        this.errors = error.error;
      }
    );
  }
}
