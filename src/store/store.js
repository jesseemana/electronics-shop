import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../features/storeSlice';


const store = configureStore( {
    reducer: {
        storeState: storeReducer,
    }
});

export default store;
