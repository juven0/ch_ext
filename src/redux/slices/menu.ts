import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface menuState {
  menu: string;
}

const initialState: menuState = {
  menu: "home",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<string>) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
