import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlices";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;
