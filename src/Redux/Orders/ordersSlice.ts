import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Order = {
    createdAt
    : 
    "2025-05-06T17:35:25.813Z"
    items
    : 
    [{…}]
    price
    : 
    400000
    shippingCost
    : 
    2500
    shippingDetails
    : 
    {name: 'Matias', cellphone: '01136137703', location: 'Martinez', address: 'rodriguez peña'}
    status
    : 
    "pending"
    total
    : 
    402500
    user
    : 
    "672d11180159091c8fe09851"
    __v
    : 
    0
    _id
    : 
    "681a485d4de92f3707b3927d"
}


type OrderState = {
    orders: null | Order,
    loading: boolean,
    error?: null | string
}

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
        addOrders: (state, action: PayloadAction<Order>) => {
            return {
                ...state,
                loading: false,
                orders: [...action.payload],

            }
        },

        orderFail: (state, action: PayloadAction<string>) => {
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