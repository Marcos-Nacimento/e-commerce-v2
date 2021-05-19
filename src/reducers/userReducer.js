const INITIAL_STATE = {
    user: {
        
    },
    token: null,
    auth: false,
};

function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "add_state":
            return action.payload;
        case "remove_state":
            return state;
        default:
            return state;
    }
};

export default userReducer;
