import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: JSON.parse(localStorage.getItem("todos")) || [] };

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
            const jsonData = JSON.stringify(state.todos);
            localStorage.setItem('todos', jsonData);

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            const jsonData = JSON.stringify(state.todos);
            localStorage.setItem('todos', jsonData);
        }
    }
});

export const { addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;