// TodoInput.js
import React, { useState } from 'react';

// ASK LILIAN ABOUT COMPONENTS EG. HOW TO BUILD THEM AND SEPARETE THEM ETC.

function TodoInput({ handleAddTodo, editingIndex, inputValue, handleInputChange, handleUpdateTodo }) {
  return (
    <div className="flex">
      <input
        className="border border-gray-300 px-3 py-2 w-full mr-2 rounded-lg"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter todo item"
      />
      {editingIndex !== null ? (
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded"
          onClick={handleUpdateTodo}
        >
          Update Todo
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded "
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      )}
    </div>
  );
}

export default TodoInput;
