import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

export const trashSlice = createSlice({
  name: "trash",
  initialState,
  reducers: {
    addTrash: (state, action: PayloadAction<any>) => {
      return [...state, action.payload ];
    },
  },
});

export const { addTrash } = trashSlice.actions;
export default trashSlice.reducer;
