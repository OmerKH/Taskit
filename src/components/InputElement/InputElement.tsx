import React from "react";
import "./InputElement.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

const InputElement: React.FC<Props> = ({ task, setTask }) => {
  return (
    <form className="input-group">
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
