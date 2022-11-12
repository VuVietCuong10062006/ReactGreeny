import { configureStore } from "@reduxjs/toolkit"
import productCartReduce from "./productCartSlice"
import authReduce  from "./authSlice"
import usersReduce  from "./userSlice"

const store = configureStore({
    reducer: {
        productCart : productCartReduce,
        auth : authReduce,
        users : usersReduce
    }
}) 

export default store