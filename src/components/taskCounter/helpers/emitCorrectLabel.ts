import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectLabel = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return `To do's`;
    case Status.inProgress:
      return 'In progress';
    case Status.completed:
      return 'Completed';
  }
};
