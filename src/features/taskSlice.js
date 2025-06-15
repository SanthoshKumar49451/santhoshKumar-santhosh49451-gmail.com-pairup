import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"taskSlice",
    initialState:[
        {
           id:1,
           title:"developemt",
           status:"todo",
           deadline:"2025-06-20"
        },
          {
           id:2,
           title:"frontend ",
           status:"in Progress",
           deadline:"2025-06-20"
        },
            {
           id:3,
           title:"Backendend ",
           status:"completed",
           deadline:"2025-06-20"
        },
            {
           id:4,
           title:"FullStack ",
           status:"todo",
           deadline:"2025-06-20"
        },
        

      
      
      
    ],
    reducers:{
        completeTask:(state,action)=>{
            const task=state.find(t=>t.id===action.payload.id)
            if (task&&task.status!=="completed") {
            task.status="completed"  
            }
        }
    }
})


export default taskSlice.reducer
export const {completeTask}=taskSlice.actions