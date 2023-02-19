import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice'
import favsReducer from '../features/favsSlice';

const store = configureStore( {
    reducer: {
        Cart: cartReducer,
        Favorites: favsReducer
    }
} );

export default store;
