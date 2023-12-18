import { configureStore } from "@reduxjs/toolkit";
import initialReducer from './redux/Slice/InitalSlice'
export const store = configureStore({
    reducer: {
        initial: initialReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;