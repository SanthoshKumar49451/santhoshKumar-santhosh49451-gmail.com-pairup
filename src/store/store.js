import { configureStore } from "@reduxjs/toolkit";
import menteeReducer from '../features/menteeSlice'
import taskReducer from '../features/taskSlice'
import feedbackReducer from '../features/feedbackSlice'
import sessionReducer from '../features/upcomingSlice'
const  store =configureStore({
    reducer:{
        mentee:menteeReducer,
        tasks:taskReducer,
        feedback:feedbackReducer,
        sessions:sessionReducer
    }
})

export  default  store