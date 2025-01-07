import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    todo: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
