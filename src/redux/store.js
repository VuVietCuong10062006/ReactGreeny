import { configureStore } from "@reduxjs/toolkit"
import productCartReduce from "./productCartSlice"
import authReduce  from "./authSlice"
import usersReduce  from "./userSlice"
import productsReduce from "./productsSlice"
import productHeartReduce from "./productHeartSlice"
import apiReduce from "./apiSlice"

const store = configureStore({
    reducer: {
        productCart : productCartReduce,
        productHeart: productHeartReduce,
        auth : authReduce,
        users : usersReduce,
        products : productsReduce,
        api : apiReduce
    }
}) 

export default store