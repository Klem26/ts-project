import React, { FC, useState, useEffect } from "react";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import { ITodo } from "../types/types";
import axios from "axios";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();

    return () => {};
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
      ;
    </div>
  );
};

export default TodosPage;
