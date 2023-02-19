import React, { createContext, useEffect, useState } from 'react'

export const MainContext = createContext();

export const StoreContext = ( { children } ) => {
    const getInitialState = () => {
        const favorites = localStorage.getItem( 'favorites' );
        return favorites ? JSON.parse(favorites) : []
    }

    const [ favorites, setFavorites ] = useState( getInitialState );

    useEffect( () => {
        localStorage.setItem( 'favorites', JSON.stringify( favorites ) );
    }, [ favorites ] );
    
    return (
        <MainContext.Provider value={ {
            favorites,
            setFavorites
        } }>
            { children }
        </MainContext.Provider>
    );
}
