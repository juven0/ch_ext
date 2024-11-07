import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filesType {
  blockHash: string;
  fileName: string;
  uploadTimestamp: number;
}

const initialState: filesType[] = [];

export const sharedFileSlice = createSlice({
  name: "sharedFile",
  initialState,
  reducers: {
    addSaredFile: (state, action: PayloadAction<any>) => {
      return [...state, action.payload];
    },
  },
});

export const { addSaredFile } = sharedFileSlice.actions;
export default sharedFileSlice.reducer;
