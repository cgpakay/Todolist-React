import React from 'react';

function TodoItem({ todo, index, handleCheckboxToggle, handleEditTodo, handleDeleteTodo }) {
  return (
    
    <li className="flex justify-between items-center py-2">
      <div>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => handleCheckboxToggle(index)}
          className="mr-2 "
        />
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
          onClick={() => handleEditTodo(index)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
          onClick={() => handleDeleteTodo(index)}
        >
          Delete
        </button>
      </div>
    </li>

  );
}

export default TodoItem;




