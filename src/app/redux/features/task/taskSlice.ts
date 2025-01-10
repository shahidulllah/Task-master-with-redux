import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ITask, TFilterOptions, TInitialState } from "./task.interface";
import { RootState } from "../../store";

const initialState: TInitialState = {
  tasks: [
    {
      id: "xs0nmsSFpD2ujN4RsuOXQ",
      isCompleted: false,
      title: "Development",
      description: "The journey of MERN Stack web development",
      dueDate: "2025-01-22T18:00:00.000Z",
      priority: "medium",
    },
  ],
  filter: "all",
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

    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateFilter: (state, action: PayloadAction<TFilterOptions>) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  task.actions;

const taskSlice = task.reducer;
export default taskSlice;
