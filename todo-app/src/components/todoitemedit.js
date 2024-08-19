import React, { useState } from 'react';

const ToDoItemEdit = ({ todo, updateTask }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
const [dueDate, setDueDate ] = useState(todo.dueDate);


  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(todo.id, title, description, dueDate);
  };

  return (

      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

<input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />

          <button type="submit">Save</button>
          <button type="button" onClick={() => updateTask(null)}>
            Cancel
          </button>
        </form>
      </div>
    
  );
};

export default ToDoItemEdit;


