import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    fullname: string;
    username: string;
    email: string;
    role: string;
    agency: string;
    fonctionalities: string[];
}

const initialState: UserState = {
    fullname: "",
    username: "",
    email: "",
    role: "",
    agency: "",
    fonctionalities: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload };
        },
        clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;