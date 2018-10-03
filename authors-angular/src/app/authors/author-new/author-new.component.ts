import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Author } from '../../models/author';
import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  @Output()
  createAuthor = new EventEmitter<Author>();

  author = new Author();

  constructor(
    private readonly authorService: AuthorService,
    private readonly router: Router
  ) { }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting new author', this.author);

    this.authorService.createAuthor(this.author).subscribe(author => {
      this.author = new Author();
      form.reset();

      this.router.navigateByUrl('/');
    });
  }

}
