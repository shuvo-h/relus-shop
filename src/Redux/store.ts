import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/Sample/counterSlice";

export const store = configureStore({
    reducer:{
        // reducerName: sliceName
        counter: counterSlice,
    },
})

export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
