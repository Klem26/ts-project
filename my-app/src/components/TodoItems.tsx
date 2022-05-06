import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../redux/todoSlice";
import React, { FC } from "react";
interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}></span>
    </li>
  );
};

export default TodoItem;
