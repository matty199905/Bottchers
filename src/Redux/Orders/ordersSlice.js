import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orders: null,
    loading: false,
    error: null,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {

        fetchOrdersStart: (state) => {
            return {
                ...state,
                loading: true,
            }
        },

        fetchOrdersEnd: (state) => {
            return {
                ...state,
                loading: false,
            }
        },
        addOrders: (state, action) => {
            return {
                ...state,
                loading: false,
                orders: [...action.payload],

            }
        },

        orderFail: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        clearOrders: (state) => {
            return {
                ...state,
                orders: null,
            }
        },

        clearError: (state) => {
            return {
                ...state,
                error: null,
            }
        }

    }
})


export const { fetchOrdersStart,
    fetchOrdersEnd,
    addOrders,
    orderFail,
    clearOrders,
    clearError } = orderSlice.actions

export default orderSlice.reducer