import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/slices/todoSlices";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
    </div>
  );
};

export default TodoItem;
