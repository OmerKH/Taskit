import React from "react";
import { Task } from "../../model";
import "./TodoList.css";

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TodoList: React.FC<Props> = ({ taskList, setTaskList }: Props) => {
  return (
    <div className="task_list">
      {taskList.map((task) => (
        <li>{task.task}</li>
      ))}
    </div>
  );
};

export default TodoList;
