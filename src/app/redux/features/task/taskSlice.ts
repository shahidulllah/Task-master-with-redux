import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ITask, TInitialState } from "./task.interface";
import { RootState } from "../../store";

const initialState: TInitialState = {
  tasks: [],
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const task = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const addedData = createTask(action.payload);
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
