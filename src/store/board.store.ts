import { signalStore, withState } from "@ngrx/signals";
import { initialBoardState } from "./board.model";

export const BoardStore = signalStore(
    { providedIn: 'root' },
    withState(initialBoardState),
);
