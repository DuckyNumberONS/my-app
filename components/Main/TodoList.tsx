import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync } from "../../redux/todoSlice";
import { AppDispatch } from "../../redux/store";

const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state:{todos:Array<{id:number,title:string,completed:boolean}>}) => state.todos);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  return (
    <ul className="mx-4 my-6 h-96 overflow-auto">
      {todos.length > 0 &&
        todos.map((todo:{id:number,title:string,completed:boolean}) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      {todos.length === 0 && (
        <p className="my-16 text-lg text-center text-gray-500">
          You re all caught up!
        </p>
      )}
    </ul>
  );
};

export default TodoList;
