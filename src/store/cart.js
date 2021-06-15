
const ADD_TO_CART = 'cart/ADD_TO_CART'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newState = {}
            action.cart.forEach(item => {
                newState[item.id] = item
            })
            return newState;
        default:
            return state;
    }
}
