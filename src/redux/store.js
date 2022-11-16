import { configureStore } from "@reduxjs/toolkit"
import productCartReduce from "./productCartSlice"
import authReduce  from "./authSlice"
import usersReduce  from "./userSlice"
import productsReduce from "./productsSlice"

const store = configureStore({
    reducer: {
        productCart : productCartReduce,
        auth : authReduce,
        users : usersReduce,
        products : productsReduce,
    }
}) 

export default store