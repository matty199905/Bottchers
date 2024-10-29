import { createSlice } from "@reduxjs/toolkit";
import { productosXCategorias, TotalProducts } from "../../Data/productsData";

export const productosInitialState = {
    productos: productosXCategorias,
    totalProducts: TotalProducts,
}

export const productosSlice = createSlice({
    name: 'productos',
    initialState: productosInitialState,
    reducers: {

        getProducts: (state) => {
            return state

        }
    }
})

export const {getProducts} = productosSlice.actions 

export default productosSlice.reducer