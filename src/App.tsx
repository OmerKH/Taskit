import React, { useState } from "react";
import "./App.css";
import InputElement from "./components/InputElement/InputElement";
import TodoList from "./components/TodoList/TodoList";
import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTaskList([...taskList, { id: Date.now(), task, isDone: false }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1 className="title">Taskit</h1>
      <InputElement task={task} setTask={setTask} handleAdd={handleAdd} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default App;
