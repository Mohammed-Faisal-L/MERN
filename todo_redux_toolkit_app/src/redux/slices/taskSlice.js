import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    removeTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
