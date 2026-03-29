export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly status: TaskStatus;
  readonly priority: 'low' | 'medium' | 'high';
  readonly createdAt: Date;
}

export const InitializedTask: Task = {
  id: 0,
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
  createdAt: new Date()
};
