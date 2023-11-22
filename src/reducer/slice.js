import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "tasks",
    initialState: JSON.parse(localStorage.getItem("tasks")) ?? [],
    reducers: {
        addTask: (state, action) => {
            state.unshift(action.payload);
        },
        deleteTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) state.splice(index, 1);
        },
        editTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title ?? task.title;
                task.description = action.payload.description ?? task.description;
            }
        },
        completeTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload.id);
            if (task) task.completed = !task.completed;
        },
    },
});

export const { addTask, deleteTask, editTask, completeTask } = slice.actions;
export default slice.reducer;
