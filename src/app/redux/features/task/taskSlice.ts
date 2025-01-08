import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, TInitialState } from "./task.interface";
import { RootState } from "../../store";
import { v4 as uuidv4 } from "uuid";

const initialState: TInitialState = {
  tasks: [],
};

const task = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();

      const addedData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(addedData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = task.actions;

const taskSlice = task.reducer;
export default taskSlice;
