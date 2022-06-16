import { configureStore } from "@reduxjs/toolkit";
import pizzaTypesReducer from "./reducers/pizzaTypesReducer";

export const store = configureStore({
    reducer:{
        pizza:pizzaTypesReducer
    }
})