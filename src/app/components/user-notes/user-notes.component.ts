import { Component, inject } from '@angular/core';
import { UserNoteComponent } from '../user-note/user-note.component';
import { CommonModule } from '@angular/common';
import { NoteInterface } from '../../models/note.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  Observable,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  exhaustMap,
  interval,
  startWith,
  switchMap,
  timer,
} from 'rxjs';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-user-notes',
  standalone: true,
  imports: [UserNoteComponent, CommonModule],
  templateUrl: './user-notes.component.html',
  styleUrl: './user-notes.component.scss',
})
export class UserNotesComponent {
  public notesService = inject(NotesService);
}
