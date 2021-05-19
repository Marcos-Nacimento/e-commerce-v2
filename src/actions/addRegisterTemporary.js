function addRegisterTemporary(register) {
    return {
        type: 'add_temporary_state',
        payload: register,
    };
};

export default addRegisterTemporary;