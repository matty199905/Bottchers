import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore'
import { productosSlice } from './Productos/productosSlice';
import { CartSlice } from './Cart/CartSlice';
import { filtersSlice } from './Filters/filtersSlice';
import { UserSlice } from './User/userSlice';



const reducers = combineReducers({
productos: productosSlice.reducer,
cart: CartSlice.reducer,
filters: filtersSlice.reducer,
user: UserSlice.reducer
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart", "user"]
}

const persistedReducer = persistReducer(persistConfig, reducers)



export const store = configureStore({

    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
  
})


export const persistor = persistStore(store)