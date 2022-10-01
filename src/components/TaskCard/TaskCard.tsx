import React from "react";
import { Task } from "../../model";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./TaskCard.css";

interface Props {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: React.FC<Props> = ({ task, taskList, setTaskList }) => {
  const handleDone = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="task-card">
      {task.isDone ? (
        <s className="task-text">{task.task}</s>
      ) : (
        <span className="task-text">{task.task}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiOutlineDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
