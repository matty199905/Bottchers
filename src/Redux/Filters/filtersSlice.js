import { createSlice } from "@reduxjs/toolkit";




 const filtersInitialState = {
    showFilters: false,
    selectedFilter: null,
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {

        show: (state) => {
            return {
                ...state,
                showFilters: !state.showFilters
            }
        },
        filterSelection: (state, action) => {
         return {
            ...state,
            selectedFilter: state.selectedFilter !== action.payload ? action.payload : null ,
            payload: action.payload,
         }
        }
    }
})


export const {show, filterSelection} = filtersSlice.actions

export default filtersSlice.reducer