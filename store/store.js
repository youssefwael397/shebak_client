import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/usersSlice";
import warningReducer from "./slices/warningSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        warning: warningReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});