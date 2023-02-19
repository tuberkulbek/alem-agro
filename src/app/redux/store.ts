import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import auth from "./auth";
import main from "./main";
import profile from "./profile";

export const store = configureStore({
    reducer: {
        auth,
        main,
        profile
    }
})

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
