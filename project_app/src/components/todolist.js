import React, { useState } from "react";
import TodoItem from "./todoitem";

const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const inputData = (event) => {
    setInput(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault(); // to avoid reloading of the page
    if (input === "") {
      alert("Please enter a task");
    } else {
      setTask([...task, input]);
      setInput(""); // Clear input after adding
    }
  };

  const handleDelete = (index) => {
    const updatedArray = task.filter((value, i) => {
      console.log(value); // ['studying']
      return i !== index;
    });
    setTask(updatedArray);
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
        {task.map((value, index) => (
          <TodoItem
            key={index}
            data={value}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
