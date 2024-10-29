import React from "react";

const TodoItem = ({ data, index, onDelete }) => {
  return (
    <div className="task-item">
      <p>{data}</p>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
