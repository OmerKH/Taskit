import React, { useState } from "react";
import "./App.css";
import InputElement from "./components/InputElement/InputElement";
import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <div className="App">
      <h1 className="title">Taskit</h1>
      <InputElement task={task} setTask={setTask} />
    </div>
  );
};

export default App;
