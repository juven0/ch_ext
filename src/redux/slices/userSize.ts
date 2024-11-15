import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface menuState {
  size: number;
}

const initialState: menuState = {
  size: 0,
};

export const userStoreSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setUserStore: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
  },
});

export const { setUserStore } = userStoreSlice.actions;
export default userStoreSlice.reducer;
