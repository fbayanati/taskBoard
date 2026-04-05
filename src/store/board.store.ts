import { signalStore, withComputed, withState } from '@ngrx/signals';
import { initialBoardState } from './board.model';
import { computed } from '@angular/core';
import { Task } from './task.model';

export const BoardStore = signalStore(
  { providedIn: 'root' },
  withState(initialBoardState),
  withComputed(state => {
    const filteredTasks = computed(() =>
      state.filter() === 'all'
        ? state.tasks()
        : state.tasks().filter((task: Task) => task.status === state.filter())
    );
    const todoCount = computed(
      () => state.tasks().filter((task: Task) => task.status === 'todo').length
    );
    const inProgressCount = computed(
      () => state.tasks().filter((task: Task) => task.status === 'in-progress').length
    );
    const doneCount = computed(
      () => state.tasks().filter((task: Task) => task.status === 'done').length
    );
    const completionRate = computed(() => {
      const total = state.tasks().length;
      const done = doneCount();
      return total === 0 ? 0 : Math.round((done / total) * 100);
    });

    return {
      filteredTasks,
      todoCount,
      inProgressCount,
      doneCount,
      completionRate,
    };
  })
);
