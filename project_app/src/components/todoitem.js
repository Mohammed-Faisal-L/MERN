import React from "react";

const TodoItem = ({ value, index, onDelete }) => {
  return (
    <div className="task-item">
      <p>{value}</p>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
