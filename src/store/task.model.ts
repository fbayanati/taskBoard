export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly status: TaskStatus;
  readonly priority: TaskPriority;
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
