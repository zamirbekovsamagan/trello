import authSlice from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import trelloSlice from "./slices/trelloSlice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        trello: trelloSlice.reducer
    }
})

export default store