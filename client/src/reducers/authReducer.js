import { LOG_IN, LOG_OUT } from '../actions/type';

const INIT_STATE = {
    isSignIn: null,
    userId: null
};

const authReducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case LOG_IN:
            return {...state, isSignIn: true, userId: action.payload.userId};
        case LOG_OUT:
            return {...state, isSignIn: false, userId: null};
        default: return state;
    }
}

export default authReducer;