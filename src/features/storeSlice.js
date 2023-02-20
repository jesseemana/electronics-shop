import { createSlice } from "@reduxjs/toolkit";

// ISSUES WITH combineReducers() SO WE COMBINE BOTH FAVORITES AND CART STATE IN ONE SLICE 
const initialState = {
    favorites: localStorage.getItem( "favoriteItems" ) ? JSON.parse( localStorage.getItem( "favoriteItems" ) ) : [],
    itemExists: false,
    cartItems: localStorage.getItem( "cartItems" ) ? JSON.parse( localStorage.getItem( "cartItems" ) ) : [],
    cartAmount: 0,
    cartQty: 0
};

const cartSlice = createSlice( {
    name: 'storeSlice',
    initialState,
    reducers: {
        // -------------------------- ACTION CREATORS FOR THE FAVORITES SECTION ----------------------------------
        // 1. ADD TO FAVORITES 
        AddToFavs ( state, action ) {   
            const itemIndex = state.favorites.findIndex( ( item ) => item.id === action.payload.id );

            // console.log(itemIndex)

            if ( itemIndex >= 0 ) {
                state.itemExists = true;
            } else {
                const item = {...action.payload, itemExists: true}
                state.favorites.push( item );
            }
            
            localStorage.setItem( "favoriteItems", JSON.stringify( state.favorites ) );
        },
        // 2. REMOVE FROM FAVORITES 
        RemoveFromFavs ( state, action ) {
            const newFavorites = state.favorites.filter( items => items.id !== action.payload.id );
            
            state.favorites = newFavorites;
            localStorage.setItem( "favoriteItems", JSON.stringify( state.favorites ) );

        }
    }
} );

export const { AddToFavs, RemoveFromFavs } = cartSlice.actions;
export default cartSlice.reducer;
