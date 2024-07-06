import {createSlice} from "@reduxjs/toolkit";
import { roomData } from './../../../data/data';



const initialState = {
    rooms:roomData,
    country:"Location (any)",
    loading:false,
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        SetCountry: (state, action) =>{
            state.country = action.payload;
        }
    }
})



export const {SetCountry} = roomSlice.actions;

const roomSliceReducer = roomSlice.reducer;
export default roomSliceReducer;