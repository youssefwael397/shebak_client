import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import warningReducer from "./slices/warningSlice";
import streamReducer from "./slices/streamSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        warning: warningReducer,
        stream: streamReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});