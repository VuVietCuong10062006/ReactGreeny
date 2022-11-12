import {
    ADD_COUNT,
    ADD_PRODUCT,
    SUBTRACT_COUNT,
    DELETE_COUNT,
} from "../constants";

//1. Tạo state
export const initProductCart =
    JSON.parse(localStorage.getItem("productCart")) || [];

const productCartReduce = (state, action) => {
    let newState = [];
    switch (action.type) {
        case ADD_COUNT: {
            const { id } = action.payload;
            newState = state.map((product) => {
                if (product.id === id) {
                    return { ...product, count: product.count + 1 };
                }
                return product;
            });
            break;
        }
        case SUBTRACT_COUNT: {
            const { id } = action.payload;
            newState = state.map((product) => {
                if (product.id === id) {
                    return { ...product, count: product.count - 1 };
                }
                return product;
            });
            break;
        }
        case DELETE_COUNT: {
            const { id } = action.payload;
            newState = state.filter((product) => product.id !== id)
            break;
        }
        case ADD_PRODUCT: {
            newState = [...state, action.payload];
            break;
        }
        default: {
            newState = [...state];
            break;
        }
    }

    localStorage.setItem("productCart", JSON.stringify(newState));
    return newState;
};

export default productCartReduce;
