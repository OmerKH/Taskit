import React, { useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState<string | number>(task.task);

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTaskList(
      taskList.map((todo) =>
        todo.id === id ? { ...todo, todo: taskEdit } : todo
      )
    );
    setEdit(false);
  };

  return (
    <form className="task-card" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          className="task-test"
          value={taskEdit}
          onChange={(e) => setTaskEdit(e.target.value)}
        />
      ) : task.isDone ? (
        <s className="task-text">{task.task}</s>
      ) : (
        <span className="task-text">{task.task}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => (!edit && !task.isDone ? setEdit(!edit) : edit)}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiOutlineDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
