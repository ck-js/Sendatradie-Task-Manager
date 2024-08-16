import React from 'react';

const ToDoItem = ({ todo, toggleTaskCompletion }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      onClick={() => toggleTaskCompletion(todo.id)}
    >
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Due Date: {todo.dueDate}</p>
    </li>
  );
};

export default ToDoItem;