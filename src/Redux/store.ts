import { configureStore } from "@reduxjs/toolkit";
import headerSearchSlice from "./Slices/headerSlices/headerSearchSlice";
import counterSlice from "./Slices/Sample/counterSlice";

export const store = configureStore({
    reducer:{
        // reducerName: sliceName
        counter: counterSlice,
        headerSearch: headerSearchSlice
    },
})

export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
