import { configureStore } from '@reduxjs/toolkit';

export const initialState = {
    favorites: localStorage.getItem( 'favorite' ) ? JSON.parse( localStorage.getItem( 'favorite' ) ) : []
};

const favsSlice = configureStore( {
    name: 'Favorites',
    initialState,
    reducer: {
        addToFavs (state, action){
            localStorage.setItem( 'favorite', JSON.stringify( state.favorites ) );
        }
    }
} )

export const { addToFavs } = favsSlice.actions;
export default favsSlice.reducer;
