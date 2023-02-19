import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: localStorage.getItem( "favoriteItems" ) ? JSON.parse( localStorage.getItem( "favoriteItems" ) ) : [],
    cartItems: localStorage.getItem( "cartItems" ) ? JSON.parse( localStorage.getItem( "cartItems" ) ) : [],
    cartAmount: 0,
    cartQty: 0
};

const cartSlice = createSlice( {
    name: 'storeSlice',
    initialState,
    reducers: {
        AddToFavs ( state, action )
        {
            state.favorites.push( action.payload );
            localStorage.setItem( "favoriteItems", JSON.stringify( state.favorites ) );
        }
    }
} );

export const { AddToFavs } = cartSlice.actions;
export default cartSlice.reducer;
