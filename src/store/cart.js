import produce from '../mockData/produce.json';
const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const INCREMENT = 'cart/INCREMENT'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
        count: 1
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const incrementItem = (id, count) => {
    return {
        type: INCREMENT,
        id,
        count
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
        case REMOVE_ITEM:
            const newObject = {
                ...state,
            }
            console.log(newObject)
            delete newObject[action.id]
            console.log(newObject)
            return newObject
        case INCREMENT:
            const copyObj = {
                ...state,
            }
            count++
            copyObj[action.id] = { id: action.id, count }
            return copyObj
        default:
            return state;
    }
}

// {<outer id for each thing
//     {<count
//         {id
//             item{name, liked, etc}
//         }
//     }
// }
