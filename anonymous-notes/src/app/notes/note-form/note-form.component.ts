import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../models';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  @Input()
  note: Note;

  @Output()
  noteEvent = new EventEmitter<Note>();

  onSubmit(form: NgForm) {
    this.noteEvent.emit(form.value);
  }
}
