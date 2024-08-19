import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { UserNotesComponent } from './components/user-notes/user-notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddNoteComponent, UserNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cryptonote';
}
