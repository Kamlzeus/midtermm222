import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/slices/todoSlices";

const filters = [
  { key: "all", label: "Все" },
  { key: "active", label: "Активные" },
  { key: "completed", label: "Выполненные" },
];

const TodoFilters = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.todo.filter);

  return (
    <div className="filters">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          className={key === current ? "active" : ""}
          onClick={() => dispatch(setFilter(key))}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilters;
