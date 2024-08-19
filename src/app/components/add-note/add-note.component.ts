import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss',
})
export class AddNoteComponent {
  public noteTitle = '';
  public noteBody = '';

  public notesService = inject(NotesService);

  public addNote() {
    this.notesService.addTodo(this.noteTitle, this.noteBody).subscribe(() => {
      this.noteTitle = '';
      this.noteBody = '';
    });
  }
}
