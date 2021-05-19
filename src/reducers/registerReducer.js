const INITIAL_STATE = {
    name: '',
    lastName: '',
    CPF: '',
    phone: '',
    email: '',
};

function registerReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'add_temporary_state':
            return action.payload;
        case 'remove_temporary_state':
            return state;
        default: 
            return state;
    };
};

export default registerReducer;