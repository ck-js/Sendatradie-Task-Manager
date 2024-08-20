import { useState } from 'react';

const useToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);  


  const startEditingTask = (todo) => {
    // alert(todo)
    setEditingTodo(todo);
    
  };

  const updateTask = (id, title, description, dueDate) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title, description, dueDate } : todo
      )
    );
    setEditingTodo(null);
  
  };
  
  console.log(todos);
  const addTask = (taskTitle, taskDescription, taskDueDate) => {
    setTodos([...todos, { id: Date.now(),
       title: taskTitle, description: taskDescription,
       dueDate: taskDueDate, completed: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTask, toggleTaskCompletion, deleteTask,
    startEditingTask, editingTodo, updateTask
   };
};

export default useToDoList;
