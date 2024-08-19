import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Observable,
  Subject,
  exhaustMap,
  interval,
  merge,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { NoteInterface } from '../models/note.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  public http = inject(HttpClient);

  public forceRefresh = new Subject<boolean>();
  public autoRefresh = interval(2000).pipe(startWith(0));

  public notes: Observable<NoteInterface[]> = merge(
    this.forceRefresh,
    this.autoRefresh,
  ).pipe(
    exhaustMap(() => {
      return this.http.get<NoteInterface[]>(
        `${environment.apiUrl}/notes/?_sort=-date`,
      );
    }),
  );

  public addTodo(title: string, body: string) {
    return this.http
      .post(`${environment.apiUrl}/notes/`, {
        title,
        body,
        date: Date.now(),
      })
      .pipe(
        tap(() => {
          this.forceRefresh.next(true);
        }),
      );
  }

  public removeNote(id: string) {
    this.http.delete(`${environment.apiUrl}/notes/${id}`).subscribe(() => {
      this.forceRefresh.next(true);
    });
  }
}
