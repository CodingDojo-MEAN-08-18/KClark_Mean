import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../models/note';
import { NoteService } from '../../services';


@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent {

  errors: string[] = [];
  note = new Note();

  constructor(
    private readonly noteService: NoteService,
    private readonly router: Router
  ) { }

  createNote(note: Note) {
    event.preventDefault();

    console.log('submitting form', note);
    this.noteService.createNote(note).subscribe(
      () => {
        this.router.navigateByUrl('notes');
      },
      error => {
        this.errors = error.error;
      }
    );
  }
}
