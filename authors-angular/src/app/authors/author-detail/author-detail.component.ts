import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../models/author';
import { map, switchMap } from 'rxjs/operators';

import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input()
  author: Author;

  constructor(
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.paramMap
      .pipe(
        map(params => params.get('author_id')),
        switchMap(id => this.authorService.getAuthor(id))
      )
      .subscribe(author => (this.author = author));
  }
}
