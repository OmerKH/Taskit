import React from "react";
import { Task } from "../../model";
import TaskCard from "../TaskCard/TaskCard";
import "./TodoList.css";

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TodoList: React.FC<Props> = ({ taskList, setTaskList }: Props) => {
  return (
    <div className="task_list">
      {taskList.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  );
};

export default TodoList;
