import { createSlice } from '@reduxjs/toolkit';

const initialHeaderSearchState = {
    searchedProducts: []
}

const headerSearchSlice = createSlice({
    name: "headerSearch",
    initialState: initialHeaderSearchState,
    reducers: {
        addSearchProducts:(state, action)=>{
            switch (action.type) {
                case "add":
                    // state.searchedProducts = [...state.searchedProducts,action.payload]
                    break;
            
                default:
                    break;
            }
        }
    },
    extraReducers:{}
})

export const {addSearchProducts} = headerSearchSlice.actions;
export default headerSearchSlice.reducer;
