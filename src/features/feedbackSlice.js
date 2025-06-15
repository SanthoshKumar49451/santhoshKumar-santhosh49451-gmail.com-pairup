import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice=createSlice({
    name:"feedbackSlice",
    initialState:[
        {
            date:"2025-06-18",
            comment:"nice tutotrial"
        },
          {
            date:"2025-06-19",
            comment:"Good tutotrial"
        },
          {
            date:"2025-06-20",
            comment:"very Good tutotrial"
        }
    ],
    reducers:{}

   
})


export default feedbackSlice.reducer