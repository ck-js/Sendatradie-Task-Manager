import React from 'react';
import ToDoItemEdit from './todoitemedit';
import useToDoList from '../hooks/usetodolist';


const ToDoItem = ({ todo, toggleTaskCompletion, startEditingTask,
  editingTodo, updateTask
 }) => {
  // const { editingTodo, updateTask } = useToDoList();

  const handleEditClick = (e) => {
    
    startEditingTask(todo);
  };

  if (editingTodo && editingTodo.id === todo.id) {
    return (
      <ToDoItemEdit
        todo={editingTodo}
        updateTask={updateTask}
      />
    );
  }



  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      // onClick={() => toggleTaskCompletion(todo.id)}
    >
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Due Date: {todo.dueDate}</p>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};

export default ToDoItem;
