import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface menuState {
  storage: string;
  peers: number
}

const initialState: menuState = {
    storage:'',
    peers:0
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStore: (state, action: PayloadAction<any>) => {
      state.storage = action.payload.storage
      state.peers = action.payload.peers
    },
  },
});

export const { setStore } = storeSlice.actions;
export default storeSlice.reducer;
