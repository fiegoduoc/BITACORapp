import { Component } from '@angular/core';

interface Note {
  title: string;
  body: string;
  date: Date;
}

@Component({
  selector: 'app-blocknotas',
  templateUrl: './blocknotas.page.html',
  styleUrls: ['./blocknotas.page.scss'],
})
export class BlocknotasPage {
  noteTitle = '';
  noteBody = '';
  notes: Note[] = [];

  saveNote() {
    const note: Note = {
      title: this.noteTitle,
      body: this.noteBody,
      date: new Date()
    };
    this.notes.push(note);
    this.notes.sort((a, b) => b.date.getTime() - a.date.getTime());
    this.noteTitle = '';
    this.noteBody = '';
  }
}