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
        // ------------------------------ ACTION CREATORS FOR THE FAVORITES SECTION ------------------------------   
        addToFavs ( state, action ) {   
            // COPYING THE EXISTING PRODUCT OBJECT THEN ADDING AN itemExists PROPERTY 
            const item = { ...action.payload, itemExists: true };
            state.favorites.push( item );
            localStorage.setItem( 'favoriteItems', JSON.stringify( state.favorites ) );
        },
        removeFromFavs ( state, action ) {
            const newFavorites = state.favorites.filter( items => items.id !== action.payload.id );
            state.favorites = newFavorites;
            localStorage.setItem( 'favoriteItems', JSON.stringify( state.favorites ) );

        },

        // ------------------------------ ACTION CREATORS FOR THE CART ------------------------------
        addToCart ( state, action ) { 
            const itemIndex = state.cartItems.findIndex( ( item ) => item.id === action.payload.id );
            if ( itemIndex >= 0 ) {
                state.cartItems[itemIndex].itemQuantity += 1
            } else {
                const cartProduct = { ...action.payload, itemQuantity: 1 };
                state.cartItems.push( cartProduct );
            }
            localStorage.setItem( 'cartItems', JSON.stringify( state.cartItems ) );
        },
        removeFromCart ( state, action ) {
            const newCart = state.cartItems.filter( ( item ) => item.id !== action.payload.id );
            state.cartItems = newCart;
            localStorage.setItem( 'cartItems', JSON.stringify( state.cartItems ) );
         },
        increaseCart ( state, action ) { 
            const itemIndex = state.cartItems.findIndex( ( item ) => item.id === action.payload.id );
            if ( state.cartItems[itemIndex]  >= 0 ) {
                item.itemQuantity += 1;
            }
        },
        decreaseCart ( state, action ) {
            const itemIndex = state.cartItems.findIndex( ( item ) => item.id === action.payload.id );
            if ( state.cartItems[itemIndex] > 0 ) { 
                item.itemQuantity -= 1
            }
        },
        clearCart ( state, action ) {
            localStorage.setItem( 'cartItems', JSON.stringify( state.cartItems = [] ) );
        }
        
    }
} );


export const {
    addToFavs,
    removeFromFavs,
    addToCart,
    removeFromCart,
    decreaseCart,
    increaseCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
