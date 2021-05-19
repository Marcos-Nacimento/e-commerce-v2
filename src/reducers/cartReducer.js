const INITIAL_STATE = {
    addedIds: [],
    quantityById: {}
};

export default function cartReducer(state = INITIAL_STATE.addedIds, action) {
    const { payload } = action;

    switch(action.type) {
        case "ADD_TO_CART":
            if(state[payload._id] === undefined) {
                state[payload._id] = payload;
                state[payload._id].quantity = 1;
            } 
            else {
                state[payload._id].quantity = state[payload._id].quantity + 1;
            }
            
            return {...state};
        case "REMOVE_FROM_CART":
            if(state[payload._id].quantity < 2) {
                delete state[payload._id];
            }
            else {
                state[payload._id].quantity = state[payload._id].quantity - 1;
            }
             
            return {...state};
        case "CLEAR_CART":
            return {};
        default:
            return state;
    };
};