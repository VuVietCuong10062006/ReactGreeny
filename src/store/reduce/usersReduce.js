import { ADD_USER } from "../constants";
// import { users } from "../../data/users";

//1. Tạo state
export const initUsers = JSON.parse(localStorage.getItem("users")) || [];

//2. Tạo reducer
const usersReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newUser = [...state, action.payload];
      localStorage.setItem("users", JSON.stringify(newUser));
      return newUser;
    }

    default: {
      return state;
    }
  }

  // localStorage.setItem("users", JSON.stringify(newState));
  // return newState;
};

export default usersReducer;
