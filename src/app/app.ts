import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardStore } from '../store/board.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('taskBoard');
  store = inject(BoardStore);

}
