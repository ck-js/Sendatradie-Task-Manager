import { useState, useEffect } from 'react';

const useToDoList = () => {
  const [todos, setTodos] = useState(createMockTodos(55));
  const [editingTodo, setEditingTodo] = useState(null);  
  const [currentPage, setCurrentPage ] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visibleTodos, setVisibleTodos] = useState([]);

  // Call updateVisibleTodos whenever todos or currentPage changes
  useEffect(() => {
    updateVisibleTodos();
  }, [todos, currentPage]);


  const updateVisibleTodos = () => {
    const todosLength = todos.length;
    const tasksPerPage = 10;
    const totalPages = Math.ceil(todosLength / tasksPerPage);
    setTotalPages(totalPages);

    const startIdx = (currentPage - 1) * tasksPerPage;
    const endIdx = startIdx + tasksPerPage;
    const currentTodos = todos.slice(startIdx, endIdx);
    setVisibleTodos(currentTodos);
  };

  
  function createMockTodos(numTasks) {
    
    const mockTodos = [];
  
    for (let i = 1; i <= numTasks; i++) {
      const todo = {
        id: `todo-${i}`,
        title: `task ${i}`,
        description: `description ${i}`,
        completed: Math.random() < 0.5, // 50% chance of being completed
        dueDate: '2025-12-31',
      };
      mockTodos.push(todo);
    }

    return mockTodos;
  }






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
    updateVisibleTodos();
  
  };
  
  console.log(todos);
  // console.log(visibleTodos);
  const addTask = (taskTitle, taskDescription, taskDueDate) => {
    setTodos([...todos, { id: Date.now(),
       title: taskTitle, description: taskDescription,
       dueDate: taskDueDate, completed: false }]);
    updateVisibleTodos();
  };

  const toggleTaskCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    updateVisibleTodos();
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };




  return { todos, addTask, toggleTaskCompletion, deleteTask,
    startEditingTask, editingTodo, updateTask, visibleTodos,
    currentPage, totalPages, setCurrentPage,

   };
};

export default useToDoList;
