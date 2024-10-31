import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, decreaseProducts, increaseProductCart, removeItemFromCart, ShippingCostByProducts } from "./cartUtils";
import { SHIPPINGCOST } from "../../Utils/constants";






 const cartInitialState = {
    cartProducts: [],
    showCart: false,
    shippingCost: 0,
}


export const CartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {

        addToCart: (state, action) => {
            return {
                ...state,
                cartProducts: addItemToCart(state.cartProducts, action.payload),
                shippingCost: SHIPPINGCOST,
            }
        },

        removeAllFromCart: (state) => {
            return {
                ...state,
                cartProducts: [],
                shippingCost: 0,
            }
        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                cartProducts: removeItemFromCart(state.cartProducts, action.payload),
                shippingCost: ShippingCostByProducts(state.cartProducts, SHIPPINGCOST),
            }
        },

        showCartToggle: (state) => {
            return {
                ...state,
                cartProducts: state.cartProducts,
                showCart: !state.showCart,
            }
        },
        plusBtn: (state, action) => {
            return {
                ...state,
                cartProducts: increaseProductCart(state.cartProducts, action.payload),
                shippingCost: SHIPPINGCOST,
            }

        },
        minusBtn: (state, action) => {
            return{
                ...state,
                cartProducts: decreaseProducts(state.cartProducts, action.payload),
                shippingCost:  ShippingCostByProducts(state.cartProducts, SHIPPINGCOST)
            }
        }

    }
})


export const { addToCart, removeAllFromCart, removeFromCart, showCartToggle, plusBtn, minusBtn } = CartSlice.actions

export default CartSlice.reducer