import { configureStore } from "@reduxjs/toolkit"
import productCartReduce from "./productCartSlice"
import authReduce  from "./authSlice"
import usersReduce  from "./userSlice"
import productsReduce from "./productsSlice"
import productHeartReduce from "./productHeartSlice"

const store = configureStore({
    reducer: {
        productCart : productCartReduce,
        productHeart: productHeartReduce,
        auth : authReduce,
        users : usersReduce,
        products : productsReduce,
    }
}) 

export default store