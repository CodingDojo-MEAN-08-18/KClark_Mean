import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from '../../models';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent {
  @Input()
  author: Author;

  @Output()
  authorEvent = new EventEmitter<Author>();

  onSubmit(form: NgForm) {
    this.authorEvent.emit(form.value);
  }
}
