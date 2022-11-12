import React, { useReducer } from "react";
import Context from "./Context";
import { products, tags, categorys, ratings } from "../data/products";
import { users } from "../data/users";
import productCartReduce, {initProductCart} from "../store/reduce/productCartReduce";
import authReducer, { initAuth } from "../store/reduce/authReduce";
import usersReducer, { initUsers } from "../store/reduce/usersReduce";


const Provider = ({ children }) => {
    const [productCartItem, dispatchProducCart] = useReducer(productCartReduce, initProductCart)
    const [auth, dispatchAuth] = useReducer(authReducer, initAuth);
    const [user, dispatchUser] = useReducer(usersReducer, initUsers);
    const value = {
        products,
        tags,
        categorys,
        ratings,
        productCartItem,
        users,
        dispatchProducCart,
        auth,
        dispatchAuth,
        user,
        dispatchUser,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
