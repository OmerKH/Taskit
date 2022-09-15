import React from "react";
import "./InputElement.css";

const InputElement = () => {
  return (
    <form className="input-group">
      <input className="input_el" type="text" placeholder="Task.." />
      <button className="save_btn">Save</button>
    </form>
  );
};

export default InputElement;
