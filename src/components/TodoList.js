import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="list-group">
      {todos.length === 0 ? (
        <p className="text-center text-muted">No todos available</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
