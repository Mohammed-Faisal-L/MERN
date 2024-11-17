import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../redux/slices/taskSlice";

const Todolist = () => {
  const [taskText, setTaskText] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-purple-600 text-center mb-6">
          TODO APP
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="ADD A NEW TASK"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition"
          >
            ADD
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-3 rounded-md ${
                task.completed ? "bg-green-100" : "bg-gray-100"
              }`}
            >
              <span
                className={`flex-1 ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-700"
                }`}
                onClick={() => dispatch(toggleTask(index))}
              >
                {task.text}
              </span>
              <button
                onClick={() => dispatch(removeTask(index))}
                className="text-red-500 hover:text-red-700 transition"
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
