import { LOG_IN, LOG_OUT } from './type';

export const logIn = (userId) => {
    return ({
        type: LOG_IN,
        payload: {
            isSignIn: true,
            userId: userId
        }
    });
};

export const logOut = () => {
    return ({
        type: LOG_OUT,
        payload: {
            isSignIn: false,
            userId: null
        }
    });
};