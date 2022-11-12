import {
    ADD_COUNT,
    SUBTRACT_COUNT,
    DELETE_COUNT,
    ADD_PRODUCT,
    LOGIN,
    LOGOUT,
    ADD_USER,
} from "./constants";

// Shopping cart
export const addCount = (id) => {
    return {
        type: ADD_COUNT,
        payload: { id },
    };
};

export const subtractCount = (id) => {
    return {
        type: SUBTRACT_COUNT,
        payload: { id },
    };
};

export const deleteCount = (id) => {
    return {
        type: DELETE_COUNT,
        payload: { id },
    };
};

export const addProduct = (item) => {
    return {
        type: ADD_PRODUCT,
        payload: item,
    };
};

// Auth
export const login = (data) => {
    return {
        type: LOGIN,
        payload: data, //thông tin user đăng nhập thành công
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};

// Users

export const addUser = (item) => {
  return {
      type: ADD_USER,
      payload: item,
  };
};
