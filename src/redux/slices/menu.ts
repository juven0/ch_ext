import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface menuState{
    menu : string
}

const initialState: menuState ={
    menu: "home"
}

export const menuSlice = createSlice({
    name: "manu",
    initialState,
    reducers:{
        setMenu:(state, action: PayloadAction<menuState>)=>{
            return {action.payload}
        }
    }
})

