import React from 'react';

const ToDoItem = ({ todo, toggleTaskCompletion }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      onClick={() => toggleTaskCompletion(todo.id)}
    >
      {todo.task}
    </li>
  );
};

export default ToDoItem;