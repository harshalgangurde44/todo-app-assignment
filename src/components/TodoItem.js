import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="d-flex flex-grow-1">
          <input
            type="text"
            className="form-control me-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="btn btn-success me-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span className="flex-grow-1">{todo.text}</span>
          <div>
            <FaEdit
              className="text-primary me-2"
              style={{ cursor: "pointer" }}
              onClick={() => setIsEditing(true)}
            />
            <FaTrash
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => onDelete(todo.id)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
