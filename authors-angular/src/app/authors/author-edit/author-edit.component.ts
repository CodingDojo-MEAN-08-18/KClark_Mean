import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
