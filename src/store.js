import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './components/CartSlice';

const store = configureStore({
    reducer:{
       cart:CartReducer, 
    },
    
});
export default store;