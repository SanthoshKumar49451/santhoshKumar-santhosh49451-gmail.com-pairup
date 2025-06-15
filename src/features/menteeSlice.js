import { createSlice } from "@reduxjs/toolkit"

const menteeSlice=createSlice({
    name:"menteeSlice",
    initialState:{
        name:"Kumar",
        mentor:"Pair Up",
        totalTasks:5,
        completedTasks:3

    },
    reducers:{}

})


export default menteeSlice.reducer