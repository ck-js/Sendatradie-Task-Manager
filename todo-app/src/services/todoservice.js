const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };
  
  const todoService = {
    saveTodosToLocalStorage,
    loadTodosFromLocalStorage,
  };
  
  export default todoService;