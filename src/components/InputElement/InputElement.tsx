import React from "react";
import TodoList from "../TodoList/TodoList";
import "./InputElement.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputElement: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  return (
    <form className="input-group" onSubmit={handleAdd}>
      <input
        className="input_el"
        value={task}
        type="text"
        placeholder="Task.."
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="save_btn">Save</button>
    </form>
  );
};

export default InputElement;
