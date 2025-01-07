import { createSlice } from "@reduxjs/toolkit";
import { TInitialState } from "./task.interface";
import { RootState } from "../../store";

const initialState: TInitialState = {
  tasks: [
    {
      id: "12456987",
      title: "Initialize Frontent",
      description: "Create home page and routing",
      dueDate: "2025-01",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "124565844",
      title: "Create github",
      description: "GitHub must be created",
      dueDate: "2025-01",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

const task = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

const taskSlice = task.reducer;
export default taskSlice;
