import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';

import { AuthorService } from '../../services';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input()
  author: Author;

  errors: string[] = [];

  constructor(
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {

    this.route.paramMap
      .pipe(
        map(params => params.get('author_id')),
        switchMap(id => this.authorService.getAuthor(id))
      )
      .subscribe(author => (this.author = author));
  }

  updateAuthor(author: Author) {
    console.log('updating author', author);

    this.authorService
      .updateAuthor(author)
      .pipe(take(1))
      .subscribe(
        () => {
          this.router.navigateByUrl('authors');
        },
        error => {
          this.errors = error.error;
        }
      );
  }

  onCancel() {
    this.router.navigateByUrl('authors');
  }
}
