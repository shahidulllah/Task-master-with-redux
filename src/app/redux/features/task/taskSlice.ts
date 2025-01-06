import { createSlice } from "@reduxjs/toolkit"
import { TInitialState } from "./task.interface";

const initialState: TInitialState = {
    task: [
        {
            id: '12456987',
            title: 'Initialize Frontent',
            description: 'Create home page and routing',
            dueDate: '2025-01',
            isCompleted: false,
            priority: 'High'
        },
        {
            id: '124565844',
            title: 'Create github',
            description: 'GitHub must be created',
            dueDate: '2025-01',
            isCompleted: false,
            priority: 'Low'
        },
    ]
}

const task = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

const taskSlice = task.reducer
export default taskSlice;