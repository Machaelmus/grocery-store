import produce from '../mockData/produce.json';
const ADD_TO_CART = 'cart/ADD_TO_CART'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
        count: 1
    }
}

// export const cartReducer = (state = {}, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             const newState = {}
//             action.cart.forEach(item => {
//                 newState[item.id] = item
//             })
//             return newState;
//         default:
//             return state;
//     }
// }
export const cartReducer = (state = {}, action) => {
    let count = action.count;
    switch (action.type) {
        case ADD_TO_CART:
            const newObj = {
                ...state,
            }
            if (newObj[action.id]) {
                count++
                newObj[action.id] = { id: action.id, count }
            } else {
                newObj[action.id] = { id: action.id, count }
            }
            return newObj;
        default:
            return state;
    }
}


// const newObj = {
//     ...oldObj,
//     newKey: { property: "value" }
//   };


// const newObj = {
//     ...state,
//     cart: { action.id: "test"}

// }
