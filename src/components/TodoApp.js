import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Todo App</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
            />
            <button className="btn btn-primary" onClick={handleAddTodo}>
              Add
            </button>
          </div>
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
