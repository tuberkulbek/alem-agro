import { createSlice } from "@reduxjs/toolkit";

const data = `{
    "users":[
        {"login":"qwerty", "password":"123"},  
        {"login":"Bob", "password":"456"},  
        {"login":"John", "password":"789"}
    ]
}`;

const parsedData = JSON.parse(data);

type AuthInitials = {
    password: string;
    login: string;
    isAuth: boolean
};

const initialState: AuthInitials = {
    password: '',
    login: '',
    isAuth: false
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            for (let i = 0; i < parsedData.users.length; i++){
                if (action.payload.email === parsedData.users[i].login && action.payload.password === parsedData.users[i].password) {
                    state.isAuth = true
                    state.login = action.payload.email
                    state.password = action.payload.password
                    console.log(state)
                }
            }
        },
    },
});

export const { setIsAuth } = auth.actions;

export default auth.reducer