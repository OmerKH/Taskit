import React from "react";
import { Task } from "../../model";

interface Props {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: React.FC<Props> = ({ task, taskList, setTaskList }) => {
  return (
    <div className="task-card">
      <span className="task-text">{task.task}</span>
    </div>
  );
};

export default TaskCard;
