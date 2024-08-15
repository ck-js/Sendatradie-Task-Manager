import { useState } from 'react';

const useToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
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

  return { todos, addTask, toggleTaskCompletion, deleteTask };
};

export default useToDoList;

