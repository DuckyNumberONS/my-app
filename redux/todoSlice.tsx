import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import request from "../utils/requestApi";

interface PayloadType {
	id?: number;
	title?: string;
	completed?: boolean;
}

export const getTodoAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await request.get("NextJS");
    const todos = await resp.data;
    return { todos };
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload: PayloadType) => {
    const resp = await request.post("NextJS", { title: payload.title });
    const todo = await resp.data;
    return { todo };
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload: PayloadType) => {
    const resp = await request.patch(`NextJS/${payload.id}`, {
      completed: payload.completed,
    });
    const todo = await resp.data;
    return { todo };
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload: PayloadType) => {
    const resp = await request.delete(`NextJS/${payload.id}`);
    return { id: payload.id };
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state:Object[], action) => {
      const todo: PayloadType = { 
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state:Array<PayloadType>, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo:{id:number}) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
		builder
			.addCase(getTodoAsync.fulfilled, (state, action) => {
				return action.payload.todos;
			})
			.addCase(addTodoAsync.fulfilled, (state: Object[], action: { payload: { todo: PayloadType; } }) => {
				state.push(action.payload.todo);
			})
			.addCase(deleteTodoAsync.fulfilled, (state, action: { payload: PayloadType; }) => {
				return state.filter((todo: PayloadType) => todo.id !== action.payload.id);
			})
			.addCase(toggleCompleteAsync.fulfilled, (state: Array<PayloadType>, action: { payload: { todo: PayloadType } }) => {
				const index = state.findIndex(
					(todo) => todo.id === action.payload.todo.id);
				state[index].completed = action.payload.todo.completed;
			})

	},
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
