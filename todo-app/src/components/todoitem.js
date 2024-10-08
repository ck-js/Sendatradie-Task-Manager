import React from 'react';
import ToDoItemEdit from './todoitemedit';
import useToDoList from '../hooks/usetodolist';


const ToDoItem = ({ todo, toggleTaskCompletion, startEditingTask,
  editingTodo, updateTask, deleteTask
 }) => {
  // const { editingTodo, updateTask } = useToDoList();
  // const { deleteTask } = useToDoList();

  const handleEditClick = (e) => {
e.stopPropagation()
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

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    alert(todo.title)
    deleteTask(todo.id);
  }

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.5 : 1, 
      }}
      onClick={() => toggleTaskCompletion(todo.id)}
    >
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Due Date: {todo.dueDate}</p>
      <div className='edit-delete-container'>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
      </div>
      
    </li>
  );
};

export default ToDoItem;
