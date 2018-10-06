import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note;

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  onSelect(note: Note) {
    console.log('selecting note', note);

    this.selectedNote = this.selectedNote === note ? null : note;
  }

  onCreate(note: Note) {
    console.log('creating note', note);

    this.noteService.createNote(note).subscribe(createdNote => {
      this.notes = [...this.notes, createdNote];
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
    console.log('stopping event propagation');
  }
}
