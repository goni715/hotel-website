import {createSlice} from "@reduxjs/toolkit";
import { roomData } from './../../../data/data';



const initialState = {
    rooms:roomData,
    kids:"0 Kids",
    adults:"1 Adult",
    loading:false,
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        SetKids: (state, action) =>{
            state.kids = action.payload;
        },
        SetAdults: (state, action) =>{
            state.adults = action.payload;
        }
    }
})



export const {SetKids, SetAdults} = roomSlice.actions;

const roomSliceReducer = roomSlice.reducer;
export default roomSliceReducer;