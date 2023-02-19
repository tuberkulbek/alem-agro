import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../api/api";
import { AppDispatch } from "./store";

const initialState = {
    firstName: '',
    secondName: '',
    photo: '',
    username: ''
}

const profile = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.firstName = action.payload.results[0].name.first
            state.secondName = action.payload.results[0].name.last
            state.photo = action.payload.results[0].picture.large
            state.username = action.payload.results[0].login.username
        },
    },
});
export const { setProfile } = profile.actions;

export const getProfileInfoAction = () => {
    return (dispatch: AppDispatch) => {
        profileApi.getProfile().then(data => {
            console.log(data)
            dispatch(setProfile(data))
        })
    }
}

export default profile.reducer