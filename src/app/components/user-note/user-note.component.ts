import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-user-note',
  standalone: true,
  imports: [],
  templateUrl: './user-note.component.html',
  styleUrl: './user-note.component.scss',
})
export class UserNoteComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() body: string = '';

  public notesService = inject(NotesService);

  public removeNote(id: string) {
    this.notesService.removeNote(id);
  }
}
