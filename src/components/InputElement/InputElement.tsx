import React, { useRef } from "react";
import TodoList from "../TodoList/TodoList";
import "./InputElement.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputElement: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input-group"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="input_el"
        value={task}
        type="text"
        placeholder="Task.."
        onChange={(e) => setTask(e.target.value)}
        // onBlur={(e) => setTask(e.target.value)}
      />

      <button className="save_btn">Save</button>
    </form>
  );
};

export default InputElement;
