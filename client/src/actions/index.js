import { LOG_IN,
        LOG_OUT,
        CREATE_STREAM,
        EDIT_STREAM,
        DELETE_STREAM,
        SHOW_STREAM,
        STREAM_LIST } from './type';
import fetchStreams from '../api/fetchStreams';

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

export const createStream = (stream) => async (dispatch) => {
    let createdStream = await fetchStreams.post('/streams', stream);

    dispatch({
        type: CREATE_STREAM,
        payload: createdStream.data
    });
};

export const editStream = (stream) => {
    return ({
        type: EDIT_STREAM,
        payload: stream
    });
};

export const deleteStream = (id) => {
    return ({
        type: EDIT_STREAM,
        payload: id
    });
};

