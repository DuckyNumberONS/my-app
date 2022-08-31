import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import request from "../utils/requestApi";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await request.get("NextJS");
    const todos = await resp.data;
    return { todos };
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload: {id: number;title:string;complete:boolean}) => {
    const resp = await request.post("NextJS", { title: payload.title });
    const todo = await resp.data;
    return { todo };
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload: {id: number;title:string;completed:boolean}) => {
    const resp = await request.patch(`NextJS/${payload.id}`, {
      completed: payload.completed,
    });
    const todo = await resp.data;
    return { todo };
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload: {id: number;title:string;completed:boolean}) => {
    const resp = await request.delete(`NextJS/${payload.id}`);
    return { id: payload.id };
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state:Object[], action) => {
      const todo: {id: number;title:string;completed:boolean} = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state:Array<{id:number,title:string,completed:boolean}>, action) => {
      const index = state.findIndex((todo:{id:number}) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo:{id:number}) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled ]: (state:Array<{id:number,title:string,completed:boolean}>, action:{ payload: { todos: {id:number,title:string,completed:boolean} }}) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled ]: (state:Object[], action:{ payload:{ todo: {id:number,title:string,completed:boolean}; }}) => {
      state.push(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled]: (state:Array<{id:number,title:string,completed:boolean}>, action:{ payload: { todo: {id:number,title:string,completed:boolean} }}) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      state[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state:Array<{id:number,title:string,completed:boolean}>, action: { payload: {id:number,title:string,completed:boolean} }) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
