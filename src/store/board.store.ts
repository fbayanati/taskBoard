import { signalStore, withComputed, withState } from "@ngrx/signals";
import { initialBoardState } from "./board.model";
import { computed } from "@angular/core";
import { Task } from "./task.model";

export const BoardStore = signalStore(
    { providedIn: 'root' },
    withState(initialBoardState),
    withComputed((state) => ({
        filteredTasks: computed(() => state.filter() === 'all' ? state.tasks() : state.tasks().filter((task: Task) => task.status === state.filter())),
    }))
);
