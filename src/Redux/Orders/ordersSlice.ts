import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Order = {
<<<<<<< HEAD
    shippingDetails: {
        name: string,
        cellphone: string,
        location: string,
        address: string,
    },
    _id: string,
    createdAt: string,
    user: string,
    price: number,
    shippingCost: number,
    items: object[]
    status: string,
    total: number,
    __v: number,
=======
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
>>>>>>> aeaf6b5340d5c1fe37bf23996c23cb1d7344b318
}


type OrderState = {
<<<<<<< HEAD
    orders: null | Order[],
    loading: boolean,
    error: null | string
}

const initialState: OrderState = {
=======
    orders: null | Order,
    loading: boolean,
    error?: null | string
}

const initialState = {
>>>>>>> aeaf6b5340d5c1fe37bf23996c23cb1d7344b318
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
<<<<<<< HEAD
        addOrders: (state, action: PayloadAction<Order[]>) => {
=======
        addOrders: (state, action: PayloadAction<Order>) => {
>>>>>>> aeaf6b5340d5c1fe37bf23996c23cb1d7344b318
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