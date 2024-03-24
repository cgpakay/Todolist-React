// import React, { useState, useEffect } from 'react';
// // import TodoItem from './TodoItem'; // Importing TodoItem component

// function TodoList() {
//   const [todos, setTodos] = useState([]); // State variable to hold todo items
//   const [inputValue, setInputValue] = useState(''); // State variable to hold input value
//   const [editingIndex, setEditingIndex] = useState(null); // State variable to hold index of the todo being edited

//   // Function to handle input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value); // Update inputValue state with the value from input field
//   };

  
//   // Function to add todo
//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') { // Check if input value is not empty
//       setTodos([...todos, { text: inputValue, done: false }]); // Add new todo to todos array with done property set to false
//       setInputValue(''); // Clear input value
//     }
//   };

//   // Function to handle editing todo
//   const handleEditTodo = (index) => {
//     setInputValue(todos[index].text); // Set input value to the text of the todo being edited
//     setEditingIndex(index); // Set editing index to the index of the todo being edited
//   };

//   // Function to update todo
//   const handleUpdateTodo = () => {
//     if (inputValue.trim() !== '') { // Check if input value is not empty
//       const updatedTodos = [...todos]; // Create a copy of todos array
//       updatedTodos[editingIndex].text = inputValue; // Update the text of todo at editingIndex
//       setTodos(updatedTodos); // Update todos array
//       setInputValue(''); // Clear input value
//       setEditingIndex(null); // Reset editing index
//     }
//   };

//   //LILIAN EXPLAIN MORE EASY WORDS PLS a) why does it create new list(indexes)/why cant it easily "if ... then delete"?
//   //so it filter lets say through 10 todo items which have all indexes from 0 until 9. when we click delete on lets say the 7. todo item (index of 6), it then sees that it needs to filter out while it filters to not include the todo with an index of 6 in its newly created list of list items, hence filterin it out?


//   // Function to delete todo 
//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the todo at given index
//     setTodos(updatedTodos); // Update todos array
//   };

//   // Function to handle checkbox toggle
//   const handleCheckboxToggle = (index) => {
//     const updatedTodos = [...todos]; // Create a copy of todos array
//     updatedTodos[index].done = !updatedTodos[index].done; // Toggle done property
//     setTodos(updatedTodos); // Update todos array
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-8">
//       <h1 className="text-3xl font-bold mb-4">Todo List</h1>
//       <div className="flex">
//         {/* Input field for adding/editing todo */}
//         <input
//           className="border border-gray-300 px-3 py-2 w-full mr-2"
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange} // Call handleInputChange function on input change
//           placeholder="Enter todo item"
//         />
//         {/* Add or Update button based on editing state */}
//         {editingIndex !== null ? (
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             onClick={handleUpdateTodo} // Call handleUpdateTodo function on button click
//           >
//             Update Todo
//           </button>
//         ) : (
//           <button
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
//             onClick={handleAddTodo} // Call handleAddTodo function on button click
//           >
//             Add Todo
//           </button>
//         )}
//       </div>
//       {/* List of todo items */}
//       <ul className="mt-4">
//         {/* Mapping through todos array to render each todo */}
//         {todos.map((todo, index) => (
//           <li key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
//             <div>
//               {/* Checkbox for marking todo as done */}
//               <input
//                 type="checkbox"
//                 checked={todo.done}
//                 onChange={() => handleCheckboxToggle(index)} // Call handleCheckboxToggle function on checkbox change
//                 className="mr-2"
//               />
//               {/* Todo text with strikethrough style if done */}
//               <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
//             </div>
//             <div>
//               {/* Edit button for editing todo */}
//               <button
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
//                 onClick={() => handleEditTodo(index)} // Call handleEditTodo function on button click
//               >
//                 Edit
//               </button>
//               {/* Delete button for deleting todo */}
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
//                 onClick={() => handleDeleteTodo(index)} // Call handleDeleteTodo function on button click
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoListHeader from './TodoListHeader';
// import backgroundImage from './img/pexels-tirachard-kumtanom-733857.jpg'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, done: false }]);
      setInputValue('');
    }
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index].text);
    setEditingIndex(index);
  };

  const handleUpdateTodo = () => {
    if (inputValue.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex].text = inputValue;
      setTodos(updatedTodos);
      setInputValue('');
      setEditingIndex(null);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleCheckboxToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-cover bg-center  bg-[url('https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <div className="border-solid border-black py-10 mx-96 pl-10">
    <div className='mt-8 bg-rose-100 rounded-lg p-10'>
    <div className="max-w-xl mx-auto">
      <TodoListHeader />
      <TodoInput
        handleAddTodo={handleAddTodo}
        editingIndex={editingIndex}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleUpdateTodo={handleUpdateTodo}
      />
      
      <ul className="mt-4 bg-white rounded-lg px-4">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleCheckboxToggle={handleCheckboxToggle}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div></div>
</div>
    </div>
  );
}

export default TodoList;
