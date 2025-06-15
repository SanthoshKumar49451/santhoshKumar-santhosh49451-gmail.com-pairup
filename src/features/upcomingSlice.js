import { createSlice } from "@reduxjs/toolkit";

const upcomingSlice=createSlice({
    name:"upcomingSlice",
    initialState:
    [
        {
        title:"react hooks",
        date:"2025-06-16"
    },
        {
        title:"next js",
        date:"2025-06-16"
    }
    ,
        {
        title:"node js",
        date:"2025-06-16"
    }
],
reducers:{}
})



export default upcomingSlice.reducer