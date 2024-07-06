import {configureStore} from "@reduxjs/toolkit";
import roomSliceReducer from "../features/room/roomSlice.js";

const store = configureStore({
    reducer: {
        room: roomSliceReducer,
    },
})


export default store;