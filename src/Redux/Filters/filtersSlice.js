import { createSlice } from "@reduxjs/toolkit";



 const filtersInitialState = {
    showFilters: false,
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {

        show: (state) => {
            return {
                ...state,
                showFilters: (!state.showFilters)
            }
        }
    }
})


export const {show} = filtersSlice.actions

export default filtersSlice.reducer