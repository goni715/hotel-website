import {createSlice} from "@reduxjs/toolkit";
import { roomData } from './../../../data/data';



const initialState = {
    rooms:roomData,
    kids:"0 Kids",
    adults:"1 Adult",
    loading:false,
    total:0
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        SetKids: (state, action) =>{
            state.kids = action.payload;
            state.total = Number(state.adults[0]) + Number(state.kids[0])
        },
        SetAdults: (state, action) =>{
            state.adults = action.payload;
            state.total = Number(state.adults[0]) + Number(state.kids[0])
        },
        FilterRooms: (state)=> {
            state.rooms = roomData.filter((cv)=> state.total <= cv.maxPerson);
        }
    }
})



export const {SetKids, SetAdults, FilterRooms} = roomSlice.actions;

const roomSliceReducer = roomSlice.reducer;
export default roomSliceReducer;