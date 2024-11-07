import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface shareState {
  show: boolean;
}

const initialState: shareState = {
  show: false,
};

export const shareFormSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setshareForm: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { setshareForm } = shareFormSlice.actions;
export default shareFormSlice.reducer;
