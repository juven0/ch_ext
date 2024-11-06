import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ActiveF{
    file: string
}
const initialState:ActiveF = {
    file:""
}

export const activeFileSlice = createSlice({
    name: "activeFileSlice",
    initialState,
    reducers:{
        setActiveFile:(state, action:PayloadAction<string>)=>{
            state.file = action.payload;
        }
    }

})

export const {setActiveFile} = activeFileSlice.actions
export default activeFileSlice.reducer
