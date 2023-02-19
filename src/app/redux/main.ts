import { createSlice } from "@reduxjs/toolkit";
import { catalogApi } from "../api/api";
import { AppDispatch } from "./store";

export type entriesType = {
    API: string
    Auth: string
    Category: string
    Cors: string
    Description: string
    HTTPS: boolean
    Link: string
}

export interface mainPage {
    count: number | null
    entries: entriesType[]
}

const initialState: mainPage = {
    count: null,
    entries: []
}

const main = createSlice({
    name: "main",
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.count = action.payload.count
            state.entries = action.payload.entries
        },
    },
});
export const { setImages } = main.actions;

export const getCatalogAction = () => {
    return (dispatch: AppDispatch) => {
        catalogApi.getCatalog().then(data => {
            dispatch(setImages(data))
        })
    }
}

export default main.reducer