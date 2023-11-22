import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
    reducer: {
        tasksReducer: slice
    },
});

export default store;
