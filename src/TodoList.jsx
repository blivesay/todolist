import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((oldTodos) => {
      return [
        ...oldTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };

  const removeTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.filter((t) => t.id !== id);
    });
  };
  const toggleTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      });
    });
  };

  return (
    <List sx={{ width: "100%" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          remove={removeTodo}
          toggle={toggleTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
