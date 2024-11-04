import React, { useState } from "react";
import TodoItem from "./todoitem";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputData = (event) => {
    setInput(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault(); // to avoid reloading of the page
    if (input === "") {
      alert("Please enter a task");
    } else {
      setTasks([...tasks, input]);
      setInput(""); // Clear input after adding
    }
  };

  const handleDelete = (index) => {
    const updatedArray = tasks.filter((value, i) => {
      console.log(value);
      return i !== index;
    });
    setTasks(updatedArray);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="center">
        <form onSubmit={addTask}>
          <input
            type="text"
            name="task"
            placeholder="Enter the task"
            value={input}
            onChange={inputData}
          />
          <button className="ms-3" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="items-center">
        {tasks.map((value, index) => (
          <TodoItem
            key={index}
            value={value}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
