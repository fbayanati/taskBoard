import { Task, TaskStatus } from './task.model';

export type BoardFilter = 'all' | TaskStatus;

export interface BoardState {
  readonly tasks: Task[];
  readonly selectedTaskId: string | null;
  readonly isLoading: boolean;
  readonly error: string | null;
  readonly filter: BoardFilter;
}

export const initialBoardState: BoardState = {
  tasks: [],
  selectedTaskId: null,
  isLoading: false,
  error: null,
  filter: 'all',
};
