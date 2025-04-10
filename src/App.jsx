import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoFilters from "./components/TodoFilters";

const App = () => {
  const { todos, filter } = useSelector((state) => state.todo);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="wrapper">
      <div className="container">
        <h1>ToDo List</h1>
        <TodoForm />
        <TodoFilters />
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
