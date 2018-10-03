import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  selectedAuthor: Author;

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }

  onSelect(author: Author) {
    console.log('selecting author', author);

    this.selectedAuthor = this.selectedAuthor === author ? null : author;
  }

  onCreate(author: Author) {
    console.log('creating author', author);

    this.authorService.createAuthor(author).subscribe(createdAuthor => {
      this.authors = [...this.authors, createdAuthor];
    });
  }

  onRemove(author: Author) {
    console.log('removing author', author);

    this.authorService.removeAuthor(author.id).subscribe(removedAuthor => {
      this.authors = this.authors.filter(a => a.id !== removedAuthor.id);
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
    console.log('stopping event propagation');
  }
}
