import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const inputData = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a task");
    } else {
      setTask([...task, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const updatedArray = task.filter((_, i) => i !== index);
    setTask(updatedArray);
  };

  return (
    <div className="todo-container">
      <h1>TODO LIST</h1>
      <div className="center">
        <form>
          <input
            type="text"
            name="task"
            placeholder="Enter the task"
            value={input}
            onChange={inputData}
          />
          <button type="button" onClick={addTask}>
            +
          </button>
        </form>
      </div>
      <div className="items-center">
        {task.map((value, index) => (
          <div className="task-item" key={index}>
            <p>{value}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
