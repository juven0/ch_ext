import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<any>) => {
      return [...state, action.payload ];
    },
  },
});

export const { addHistory } = historySlice.actions;
export default historySlice.reducer;
