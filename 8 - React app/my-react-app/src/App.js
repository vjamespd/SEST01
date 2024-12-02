import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, SetTodos] = useState([]);
  const [input, SetInpute] = useState('');

  // add new to do (Create)
  const addTodo = () => {
    if(input.trim()){
      SetTodos([...todos, {id: Date.now(), text: input, completed: false}]);
      SetInpute('');
    }
  }

  // Toggle a todo completed state (Update)
  const toggleTodo = (id) => {
    SetTodos(
      todos.map((todo) =>
      todo.id === id ? {...todo, completed:!todo.completed} : todo
      )
    );
  };

  // Delete a todo (delete)
  const deleteTodo = (id) => {
    SetTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-do List</h1>
      <div>
        <input type="text" valu={input} onChange={(e) => SetInpute(e.target.value)} />
        <button onClick={addTodo} style={{marginLeft: '10px'}}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key = {todo.id} 
          style={{
            display:'flex',
            alignItems: 'center',
            marginBottom:'10px',
            textDecoration: todo.completed ? 'line-throght' : 'none',
          }}>
            <span onClick={() => toggleTodo(todo.div)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;