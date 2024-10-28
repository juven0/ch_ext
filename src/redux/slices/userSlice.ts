import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  pub_key: string;
  prive_key: string;
  user_id: string;
}

const initialState: UserState = {
  username: "",
  pub_key: "",
  prive_key: "",
  user_id: "",
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
