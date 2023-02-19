import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem( "cartItems" ) ? JSON.parse( localStorage.getItem( "cartItems" ) ) : [],
    cartAmount: 0,
    cartQty: 0
}

const cartSlice = createSlice( {
    name: 'Cart',
    initialState,
    reducers: {}
} );

export default cartSlice.reducer;
