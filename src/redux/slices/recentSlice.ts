import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

export const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    addRecent: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addRecent } = recentSlice.actions;
export default recentSlice.reducer;
