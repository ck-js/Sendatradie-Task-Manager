import React, { useState } from 'react';

const ToDoItemEdit = ({ todo, updateTask }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);




  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(todo.id, title, description);
  };

  return (

      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => updateTask(null)}>
            Cancel
          </button>
        </form>
      </div>
    
  );
};

export default ToDoItemEdit;


