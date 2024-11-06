import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filesType {
  blockHash: string;
  fileName: string;
  uploadTimestamp: number;
}

const initialState: filesType[] = [];

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addFile } = fileSlice.actions;
export default fileSlice.reducer;
